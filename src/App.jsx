import React, { useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { RAW_EDGES, RAW_NODES, REL_META, TYPE_META, TYPE_ORDER } from "./data/axEmpV3.js";

const CARD_WIDTH = 208;
const ROW_GAP = 78;
const X_BY_TYPE = {
  ST: 0,
  LB: 270,
  DOC: 540,
  PR: 810,
  EV: 1080,
};

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function getNodeTypeLabel(type) {
  return TYPE_META[type]?.label ?? type;
}

function getNeighborIds(seedId, edges, depth = 1) {
  const visited = new Set([seedId]);
  let frontier = new Set([seedId]);

  for (let level = 0; level < depth; level += 1) {
    const next = new Set();

    edges.forEach((edge) => {
      if (frontier.has(edge.source) && !visited.has(edge.target)) {
        visited.add(edge.target);
        next.add(edge.target);
      }
      if (frontier.has(edge.target) && !visited.has(edge.source)) {
        visited.add(edge.source);
        next.add(edge.source);
      }
    });

    frontier = next;
    if (!frontier.size) break;
  }

  return visited;
}

function buildAdjacencyMap(edges) {
  const map = new Map();

  edges.forEach((edge) => {
    if (!map.has(edge.source)) map.set(edge.source, []);
    if (!map.has(edge.target)) map.set(edge.target, []);
    map.get(edge.source).push(edge.target);
    map.get(edge.target).push(edge.source);
  });

  return map;
}

function orderNodesWithinLayers(rawNodes, rawEdges) {
  const layers = Object.fromEntries(
    TYPE_ORDER.map((type) => [
      type,
      rawNodes
        .filter((node) => node.type === type)
        .sort((a, b) => a.order - b.order),
    ])
  );

  const adjacency = buildAdjacencyMap(rawEdges);
  let indexMap = new Map();
  TYPE_ORDER.forEach((type) => {
    layers[type].forEach((node, index) => {
      indexMap.set(node.id, index);
    });
  });

  for (let pass = 0; pass < 6; pass += 1) {
    TYPE_ORDER.forEach((type) => {
      const currentLayer = layers[type];

      currentLayer.sort((a, b) => {
        const aNeighbors = (adjacency.get(a.id) ?? []).map((id) => indexMap.get(id)).filter((value) => Number.isFinite(value));
        const bNeighbors = (adjacency.get(b.id) ?? []).map((id) => indexMap.get(id)).filter((value) => Number.isFinite(value));

        const aCenter = aNeighbors.length
          ? aNeighbors.reduce((sum, value) => sum + value, 0) / aNeighbors.length
          : indexMap.get(a.id) ?? a.order;
        const bCenter = bNeighbors.length
          ? bNeighbors.reduce((sum, value) => sum + value, 0) / bNeighbors.length
          : indexMap.get(b.id) ?? b.order;

        if (aCenter !== bCenter) return aCenter - bCenter;
        return a.order - b.order;
      });

      currentLayer.forEach((node, index) => {
        indexMap.set(node.id, index);
      });
    });
  }

  return layers;
}

function buildFlowData(rawNodes, rawEdges, focusId, focusDepth, hideUnrelated, selectedNodeId) {
  const neighborhood = focusId ? getNeighborIds(focusId, rawEdges, focusDepth) : null;

  const visibleNodes = rawNodes.filter((node) => {
    if (!neighborhood || !hideUnrelated) return true;
    return neighborhood.has(node.id);
  });

  const visibleIds = new Set(visibleNodes.map((node) => node.id));
  const visibleEdges = rawEdges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target));
  const orderedLayers = orderNodesWithinLayers(visibleNodes, visibleEdges);
  const maxCount = Math.max(...TYPE_ORDER.map((type) => orderedLayers[type].length || 0), 1);
  const showEdgeLabels = visibleEdges.length <= 80;

  const nodes = [];
  TYPE_ORDER.forEach((type) => {
    const layerNodes = orderedLayers[type];
    const verticalOffset = ((maxCount - layerNodes.length) * ROW_GAP) / 2;

    layerNodes.forEach((node, index) => {
      const isSelected = node.id === selectedNodeId;
      const meta = TYPE_META[node.type];

      nodes.push({
        id: node.id,
        type: "default",
        draggable: false,
        selectable: true,
        data: {
          label: (
            <div className="rf-node-card__content">
              <div className="rf-node-card__title">{node.nameVi}</div>
            </div>
          ),
          raw: node,
        },
        position: {
          x: X_BY_TYPE[type],
          y: verticalOffset + index * ROW_GAP,
        },
        sourcePosition: "right",
        targetPosition: "left",
        style: {
          width: CARD_WIDTH,
          minHeight: 58,
          borderRadius: 16,
          border: `2px solid ${isSelected ? meta.color : meta.border}`,
          background: meta.bg,
          color: "#142033",
          boxShadow: isSelected
            ? `0 0 0 4px ${meta.color}1f, 0 12px 30px rgba(18, 29, 45, 0.14)`
            : "0 6px 18px rgba(18, 29, 45, 0.07)",
          fontSize: 13,
          fontWeight: 600,
          padding: 0,
        },
      });
    });
  });

  const edges = visibleEdges.map((edge, index) => {
    const meta = REL_META[edge.relation] ?? REL_META.RELATED_TO;
    const isHighlighted = focusId && (edge.source === focusId || edge.target === focusId);

    return {
      id: `edge-${index}-${edge.source}-${edge.target}`,
      source: edge.source,
      target: edge.target,
      type: "smoothstep",
      animated: edge.relation === "TRIGGERS" && visibleEdges.length <= 60,
      label: showEdgeLabels ? meta.label : "",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: meta.color,
        width: 18,
        height: 18,
      },
      style: {
        stroke: meta.color,
        strokeWidth: isHighlighted ? 2.2 : 1.4,
        strokeDasharray: meta.dash ?? undefined,
        opacity: isHighlighted || !focusId ? 0.95 : 0.68,
      },
      labelStyle: {
        fill: "#475569",
        fontSize: 10.5,
        fontWeight: 700,
      },
      labelBgStyle: {
        fill: "rgba(255,255,255,0.88)",
        fillOpacity: 1,
      },
      labelBgPadding: [5, 3],
      labelBgBorderRadius: 6,
      data: {
        raw: edge,
      },
    };
  });

  return { nodes, edges };
}

function StatPill({ label, value }) {
  return (
    <div className="stat-pill">
      <span className="stat-pill__label">{label}</span>
      <strong className="stat-pill__value">{value}</strong>
    </div>
  );
}

function TypeToggle({ type, active, count, onClick }) {
  const meta = TYPE_META[type];
  return (
    <button
      type="button"
      className={`type-toggle ${active ? "is-active" : ""}`}
      style={{
        borderColor: meta.border,
        background: active ? meta.color : "#ffffff",
        color: active ? "#ffffff" : meta.border,
      }}
      onClick={onClick}
    >
      <span className="type-toggle__code">{type}</span>
      <span className="type-toggle__count">{count}</span>
    </button>
  );
}

function FlowCanvas({ nodes, edges, onNodeClick, onPaneClick }) {
  const { fitView } = useReactFlow();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      fitView({
        padding: 0.16,
        duration: 350,
        maxZoom: 1.15,
      });
    }, 30);

    return () => window.clearTimeout(timer);
  }, [nodes, edges, fitView]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      minZoom={0.3}
      maxZoom={1.3}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable
      zoomOnDoubleClick={false}
      onNodeClick={onNodeClick}
      onPaneClick={onPaneClick}
      proOptions={{ hideAttribution: true }}
    >
      <Controls position="bottom-left" />
      <Background gap={18} size={1} color="#d7deea" />
    </ReactFlow>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState(TYPE_ORDER);
  const [focusId, setFocusId] = useState(null);
  const [focusDepth, setFocusDepth] = useState(1);
  const [hideUnrelated, setHideUnrelated] = useState(true);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const nodeMap = useMemo(() => new Map(RAW_NODES.map((node) => [node.id, node])), []);
  const typeCounts = useMemo(
    () =>
      TYPE_ORDER.reduce((acc, type) => {
        acc[type] = RAW_NODES.filter((node) => node.type === type).length;
        return acc;
      }, {}),
    []
  );

  const filteredNodes = useMemo(() => {
    const query = normalizeText(search.trim());

    return RAW_NODES.filter((node) => {
      if (!selectedTypes.includes(node.type)) return false;
      if (!query) return true;

      const haystack = normalizeText(
        [node.id, node.nameVi, node.nameEn, node.note, node.category].filter(Boolean).join(" | ")
      );

      return haystack.includes(query);
    });
  }, [search, selectedTypes]);

  const visibleNodeIds = useMemo(() => new Set(filteredNodes.map((node) => node.id)), [filteredNodes]);

  const filteredEdges = useMemo(
    () =>
      RAW_EDGES.filter(
        (edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
      ),
    [visibleNodeIds]
  );

  const flowData = useMemo(
    () =>
      buildFlowData(
        filteredNodes,
        filteredEdges,
        focusId,
        focusDepth,
        hideUnrelated,
        selectedNodeId
      ),
    [filteredNodes, filteredEdges, focusId, focusDepth, hideUnrelated, selectedNodeId]
  );

  const selectedNode = useMemo(
    () => (selectedNodeId ? nodeMap.get(selectedNodeId) ?? null : null),
    [nodeMap, selectedNodeId]
  );

  const connectedItems = useMemo(() => {
    if (!selectedNodeId) return [];

    return filteredEdges
      .filter((edge) => edge.source === selectedNodeId || edge.target === selectedNodeId)
      .map((edge) => {
        const otherId = edge.source === selectedNodeId ? edge.target : edge.source;
        return {
          edge,
          other: nodeMap.get(otherId),
        };
      })
      .filter((item) => item.other)
      .sort((a, b) => {
        const typeGap =
          TYPE_ORDER.indexOf(a.other.type) - TYPE_ORDER.indexOf(b.other.type);
        if (typeGap !== 0) return typeGap;
        return a.other.order - b.other.order;
      });
  }, [filteredEdges, nodeMap, selectedNodeId]);

  useEffect(() => {
    if (selectedNodeId && !visibleNodeIds.has(selectedNodeId)) {
      setSelectedNodeId(null);
    }
    if (focusId && !visibleNodeIds.has(focusId)) {
      setFocusId(null);
    }
  }, [focusId, selectedNodeId, visibleNodeIds]);

  const visibleCounts = useMemo(
    () =>
      TYPE_ORDER.reduce((acc, type) => {
        acc[type] = flowData.nodes.filter((node) => node.data.raw.type === type).length;
        return acc;
      }, {}),
    [flowData.nodes]
  );

  return (
    <div className="app-shell">
      <aside className="sidebar sidebar--left">
        <div className="brand-block">
          <div className="brand-block__eyebrow">LEGAL NAVIGATOR</div>
          <h1 className="brand-block__title">AX-EMP · Employment Relationship Map</h1>
          <p className="brand-block__desc">
            Tra nhanh cơ sở pháp lý, hồ sơ, quy trình và sự kiện trong trục quan hệ lao động.
          </p>
        </div>

        <section className="panel-card">
          <div className="panel-card__title">Tìm kiếm</div>
          <input
            className="search-input"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Tìm theo mã, tên Việt hoặc tên Anh..."
          />
        </section>

        <section className="panel-card">
          <div className="panel-card__title">Loại đối tượng</div>
          <div className="type-toggle-grid">
            {TYPE_ORDER.map((type) => (
              <TypeToggle
                key={type}
                type={type}
                active={selectedTypes.includes(type)}
                count={typeCounts[type]}
                onClick={() =>
                  setSelectedTypes((current) =>
                    current.includes(type)
                      ? current.filter((item) => item !== type)
                      : [...current, type]
                  )
                }
              />
            ))}
          </div>
        </section>

        <section className="panel-card">
          <div className="panel-card__title">Thiết lập hiển thị</div>

          <label className="form-row form-row--checkbox">
            <span>Ẩn mục không liên quan khi đã chọn một ô</span>
            <input
              type="checkbox"
              checked={hideUnrelated}
              onChange={(event) => setHideUnrelated(event.target.checked)}
            />
          </label>

          <label className="form-row form-row--stack">
            <span>Độ sâu liên kết</span>
            <select
              className="select-input"
              value={focusDepth}
              onChange={(event) => setFocusDepth(Number(event.target.value))}
            >
              <option value={1}>1 lớp liên kết</option>
              <option value={2}>2 lớp liên kết</option>
              <option value={3}>3 lớp liên kết</option>
            </select>
          </label>

          <div className="button-stack">
            <button
              type="button"
              className="primary-button"
              onClick={() => {
                setFocusId(null);
                setSelectedNodeId(null);
                setSearch("");
                setSelectedTypes(TYPE_ORDER);
              }}
            >
              Hiện toàn bộ sơ đồ
            </button>
          </div>
        </section>

        <section className="panel-card panel-card--muted">
          <div className="panel-card__title">Cách dùng nhanh</div>
          <ul className="help-list">
            <li>Bấm vào một ô trên sơ đồ để xem chi tiết và các liên kết trực tiếp.</li>
            <li>Bật chế độ ẩn mục không liên quan để thu gọn sơ đồ theo nội dung đang xem.</li>
            <li>Dùng ô tìm kiếm để lọc nhanh theo mã, tên tài liệu, quy trình hoặc cơ sở pháp lý.</li>
          </ul>
        </section>

        <section className="panel-card panel-card--muted">
          <div className="panel-card__title">Chú giải</div>

          <div className="legend-group">
            {TYPE_ORDER.map((type) => (
              <div key={type} className="legend-row">
                <span
                  className="legend-dot"
                  style={{ background: TYPE_META[type].color }}
                />
                <span className="legend-row__code">{type}</span>
                <span className="legend-row__label">{TYPE_META[type].label}</span>
              </div>
            ))}
          </div>

          <div className="legend-divider" />

          <div className="legend-group">
            {Object.entries(REL_META).map(([key, value]) => (
              <div key={key} className="legend-row legend-row--line">
                <span
                  className="legend-line"
                  style={{
                    background: value.dash
                      ? `repeating-linear-gradient(to right, ${value.color} 0 10px, transparent 10px 16px)`
                      : value.color,
                  }}
                />
                <span className="legend-row__label">{value.label}</span>
              </div>
            ))}
          </div>
        </section>
      </aside>

      <main className="canvas-shell">
        <div className="canvas-shell__stats">
          <StatPill label="Node" value={flowData.nodes.length} />
          <StatPill label="Edge" value={flowData.edges.length} />
          {TYPE_ORDER.map((type) => (
            <StatPill key={type} label={type} value={visibleCounts[type]} />
          ))}
        </div>

        <div className="canvas-shell__board">
          <ReactFlowProvider>
            <FlowCanvas
              nodes={flowData.nodes}
              edges={flowData.edges}
              onNodeClick={(_, node) => {
                setSelectedNodeId(node.id);
                setFocusId(node.id);
              }}
              onPaneClick={() => {
                setSelectedNodeId(null);
              }}
            />
          </ReactFlowProvider>
        </div>

        <div className="canvas-shell__hint">
          <strong>Mẹo:</strong> bấm vào một Luật, Tài liệu hoặc Quy trình để thu gọn sơ đồ theo phần liên quan. Khi cần quay lại chế độ tổng quan, chọn <strong>Hiện toàn bộ sơ đồ</strong>.
        </div>
      </main>

      <aside className="sidebar sidebar--right">
        <div className="details-header">
          <div className="details-header__eyebrow">CHI TIẾT</div>
          <h2 className="details-header__title">
            {selectedNode ? selectedNode.nameVi : "Chưa chọn nội dung"}
          </h2>
          <p className="details-header__subtitle">
            {selectedNode
              ? `${selectedNode.id} · ${getNodeTypeLabel(selectedNode.type)}`
              : "Chọn một ô trong sơ đồ để xem mô tả, liên kết trực tiếp và chuyển nhanh sang mục liên quan."}
          </p>
        </div>

        {selectedNode ? (
          <div className="details-stack">
            <section className="detail-card">
              <div
                className="type-badge"
                style={{
                  background: TYPE_META[selectedNode.type].color,
                }}
              >
                {TYPE_META[selectedNode.type].code} · {TYPE_META[selectedNode.type].label}
              </div>

              <div className="detail-copy">
                {selectedNode.note ||
                  "Mục này thuộc trục Quan hệ lao động và đang được hiển thị trong bản đồ điều hướng pháp lý."}
              </div>

              <div className="detail-actions">
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => {
                    setFocusId(selectedNode.id);
                    setHideUnrelated(true);
                  }}
                >
                  Chỉ giữ phần liên quan
                </button>
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => {
                    setFocusId(null);
                    setHideUnrelated(false);
                  }}
                >
                  Mở lại toàn cảnh
                </button>
              </div>
            </section>

            <section className="detail-card detail-card--compact">
              <div className="kv-row">
                <span className="kv-row__key">Tên tiếng Anh</span>
                <span className="kv-row__value">{selectedNode.nameEn}</span>
              </div>
              <div className="kv-row">
                <span className="kv-row__key">Trục</span>
                <span className="kv-row__value">{selectedNode.axis}</span>
              </div>
              <div className="kv-row">
                <span className="kv-row__key">Phân nhóm</span>
                <span className="kv-row__value">{selectedNode.category}</span>
              </div>
            </section>

            <section className="detail-card">
              <div className="section-title">
                Liên kết trực tiếp <span className="section-title__count">{connectedItems.length}</span>
              </div>

              <div className="linked-list">
                {connectedItems.length ? (
                  connectedItems.map(({ edge, other }) => {
                    const relationMeta = REL_META[edge.relation] ?? REL_META.RELATED_TO;
                    return (
                      <button
                        type="button"
                        key={`${edge.source}-${edge.target}-${edge.order}`}
                        className="linked-item"
                        onClick={() => {
                          setSelectedNodeId(other.id);
                          setFocusId(other.id);
                        }}
                      >
                        <div className="linked-item__top">
                          <span
                            className="linked-item__type"
                            style={{
                              color: TYPE_META[other.type].border,
                              background: TYPE_META[other.type].bg,
                              borderColor: TYPE_META[other.type].border,
                            }}
                          >
                            {other.type}
                          </span>
                          <span
                            className="linked-item__relation"
                            style={{ color: relationMeta.color }}
                          >
                            {relationMeta.label}
                          </span>
                        </div>

                        <div className="linked-item__title">{other.nameVi}</div>

                        {edge.note ? (
                          <div className="linked-item__note">{edge.note}</div>
                        ) : null}
                      </button>
                    );
                  })
                ) : (
                  <div className="empty-note">Không có liên kết nào trong chế độ xem hiện tại.</div>
                )}
              </div>
            </section>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state__title">Gợi ý thao tác</div>
            <ul className="help-list">
              <li>Bấm vào một Luật để xem hồ sơ và quy trình chịu tác động.</li>
              <li>Bấm vào một Tài liệu để xem cơ sở pháp lý, quy trình và sự kiện liên quan.</li>
              <li>Dùng chế độ thu gọn để chuyển từ sơ đồ tổng quan sang chế độ điều hướng chi tiết.</li>
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
}

export default function LegalEmploymentNavigatorApp() {
  return <App />;
}
