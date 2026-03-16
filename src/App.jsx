import React, { useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  MarkerType,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

const RAW_NODES = [
  { id: "ST-EMPLOYEE", type: "ST", nameVi: "Người lao động", nameEn: "Employees", axis: "AX-EMP", category: "STAKEHOLDER", note: "Đầu mối chính của đa số hồ sơ / quy trình AX-EMP." },
  { id: "ST-CANDIDATE", type: "ST", nameVi: "Ứng viên", nameEn: "Job candidates", axis: "AX-EMP", category: "STAKEHOLDER", note: "Áp dụng cho giai đoạn tuyển dụng." },
  { id: "ST-INTERN", type: "ST", nameVi: "Thực tập sinh", nameEn: "Interns", axis: "AX-EMP", category: "STAKEHOLDER", note: "Áp dụng cho hồ sơ thực tập." },
  { id: "ST-UNION", type: "ST", nameVi: "Tập thể NLĐ / Công đoàn", nameEn: "Employee collective / Union", axis: "AX-EMP", category: "STAKEHOLDER", note: "Liên quan thỏa ước lao động tập thể nếu có." },
  { id: "ST-LABOR-LOCAL", type: "ST", nameVi: "Cơ quan lao động địa phương", nameEn: "Local labour authority", axis: "AX-EMP", category: "STAKEHOLDER", note: "Chỉ áp dụng cho nhóm hồ sơ có nghĩa vụ lao động." },
  { id: "ST-BHXH-LOCAL", type: "ST", nameVi: "Cơ quan BHXH địa phương", nameEn: "Local social insurance agency", axis: "AX-EMP", category: "STAKEHOLDER", note: "Áp dụng cho hồ sơ BHXH, BHYT, BHTN." },
  { id: "ST-TAX-LOCAL", type: "ST", nameVi: "Cơ quan thuế địa phương", nameEn: "Local tax authority", axis: "AX-EMP", category: "STAKEHOLDER", note: "Chủ yếu overlap khi xét PIT/payroll." },
  { id: "ST-SSC", type: "ST", nameVi: "Ủy ban Chứng khoán Nhà nước", nameEn: "State Securities Commission", axis: "AX-EMP", category: "STAKEHOLDER", note: "Chỉ áp dụng hạn chế cho nhân sự hành nghề chứng khoán." },
  { id: "LB-LAW-LABOR", type: "LB", nameVi: "Bộ luật Lao động 2019", nameEn: "Labor Code 2019", axis: "AX-EMP", category: "LEGAL_BASIS" },
  { id: "LB-LAW-SOCIAL-SI", type: "LB", nameVi: "Luật Bảo hiểm xã hội", nameEn: "Law on Social Insurance", axis: "AX-EMP", category: "LEGAL_BASIS" },
  { id: "LB-LAW-SOCIAL-HI", type: "LB", nameVi: "Luật Bảo hiểm y tế", nameEn: "Law on Health Insurance", axis: "AX-EMP", category: "LEGAL_BASIS" },
  { id: "LB-LAW-TAX-PIT", type: "LB", nameVi: "Luật Thuế thu nhập cá nhân", nameEn: "Law on Personal Income Tax", axis: "AX-EMP", category: "LEGAL_BASIS" },
  { id: "LB-LAW-SEC", type: "LB", nameVi: "Luật Chứng khoán", nameEn: "Law on Securities", axis: "AX-EMP", category: "LEGAL_BASIS" },
  { id: "LB-CIR-SEC-PRACT", type: "LB", nameVi: "Thông tư 135/2025/TT-BTC về hành nghề CK", nameEn: "Circular 135/2025 on securities practice", axis: "AX-EMP", category: "LEGAL_BASIS" },
  { id: "LB-LAW-PDP", type: "LB", nameVi: "Luật Bảo vệ dữ liệu cá nhân", nameEn: "Law on Personal Data Protection", axis: "AX-EMP", category: "LEGAL_BASIS" },
  { id: "DOC-HR-JD", type: "DOC", nameVi: "Mô tả công việc", nameEn: "Job Description", axis: "AX-EMP", category: "DOCUMENT", note: "Cơ sở cho tuyển dụng, onboarding và đánh giá công việc." },
  { id: "DOC-HR-INTERN", type: "DOC", nameVi: "Thỏa thuận thực tập", nameEn: "Intern Agreement", axis: "AX-EMP", category: "DOCUMENT", note: "Xác lập quyền và nghĩa vụ với thực tập sinh." },
  { id: "DOC-HR-LC", type: "DOC", nameVi: "Hợp đồng lao động", nameEn: "Labor Contract", axis: "AX-EMP", category: "DOCUMENT", note: "Văn bản cốt lõi xác lập quan hệ lao động." },
  { id: "DOC-HR-NDA", type: "DOC", nameVi: "Thỏa thuận bảo mật (NDA)", nameEn: "Confidentiality / NDA", axis: "AX-EMP", category: "DOCUMENT", note: "Ràng buộc nghĩa vụ bảo mật và quản lý dữ liệu." },
  { id: "DOC-LABOR-ILR", type: "DOC", nameVi: "Nội quy lao động", nameEn: "Internal Labor Rules", axis: "AX-EMP", category: "DOCUMENT", note: "Điều chỉnh kỷ luật, trật tự và xử lý vi phạm lao động." },
  { id: "DOC-LABOR-CLA", type: "DOC", nameVi: "Thỏa ước lao động tập thể", nameEn: "Collective Labor Agreement", axis: "AX-EMP", category: "DOCUMENT" },
  { id: "DOC-HR-CODE", type: "DOC", nameVi: "Quy tắc đạo đức nghề nghiệp", nameEn: "Code of Professional Ethics", axis: "AX-EMP", category: "DOCUMENT" },
  { id: "DOC-SEC-PRACTICE", type: "DOC", nameVi: "Chứng chỉ hành nghề / hồ sơ hành nghề CK", nameEn: "Securities practice certificate / file", axis: "AX-EMP", category: "DOCUMENT" },
  { id: "DOC-BHXH-REGISTER", type: "DOC", nameVi: "Hồ sơ tham gia BHXH, BHYT, BHTN", nameEn: "Insurance registration file", axis: "AX-EMP", category: "DOCUMENT" },
  { id: "PR-HR-RECRUIT-01", type: "PR", nameVi: "Quy trình tuyển dụng và đào tạo", nameEn: "Recruitment and training process", axis: "AX-EMP", category: "PROCESS" },
  { id: "PR-HR-ONBOARD-01", type: "PR", nameVi: "Quy trình tiếp nhận nhân viên mới", nameEn: "Employee onboarding process", axis: "AX-EMP", category: "PROCESS" },
  { id: "PR-HR-CONTRACT-01", type: "PR", nameVi: "Quy trình theo dõi HĐLĐ", nameEn: "Labor contract tracking process", axis: "AX-EMP", category: "PROCESS" },
  { id: "PR-HR-DISCIPLINE-01", type: "PR", nameVi: "Quy trình xử lý kỷ luật", nameEn: "Disciplinary handling process", axis: "AX-EMP", category: "PROCESS" },
  { id: "PR-HR-PAYROLL-01", type: "PR", nameVi: "Quy trình đánh giá và trả lương", nameEn: "Payroll review and salary payment process", axis: "AX-EMP", category: "PROCESS" },
  { id: "PR-HR-BENEFIT-01", type: "PR", nameVi: "Quy trình thực hiện chế độ phúc lợi", nameEn: "Benefits implementation process", axis: "AX-EMP", category: "PROCESS" },
  { id: "PR-HR-PERFORMANCE-01", type: "PR", nameVi: "Quy trình quản lý hiệu suất", nameEn: "Performance management process", axis: "AX-EMP", category: "PROCESS" },
  { id: "PR-HR-LEAVE-01", type: "PR", nameVi: "Quy trình nghỉ phép", nameEn: "Leave management process", axis: "AX-EMP", category: "PROCESS" },
  { id: "PR-HR-BUSINESSTRIP-01", type: "PR", nameVi: "Quy trình / chính sách công tác", nameEn: "Business trip process / policy", axis: "AX-EMP", category: "PROCESS" },
  { id: "PR-HR-OFFBOARD-01", type: "PR", nameVi: "Quy trình bàn giao trước khi nghỉ việc", nameEn: "Pre-resignation handover process", axis: "AX-EMP", category: "PROCESS" },
  { id: "EV-EMP-RECRUIT", type: "EV", nameVi: "Tuyển dụng / tiếp nhận ứng viên", nameEn: "Recruitment / candidate intake", axis: "AX-EMP", category: "EVENT" },
  { id: "EV-EMP-ONBOARD", type: "EV", nameVi: "Tiếp nhận nhân viên mới", nameEn: "Employee onboarding", axis: "AX-EMP", category: "EVENT" },
  { id: "EV-EMP-PAYROLL", type: "EV", nameVi: "Chi trả lương, thưởng và phúc lợi", nameEn: "Payroll, bonus and benefits", axis: "AX-EMP", category: "EVENT" },
  { id: "EV-EMP-LEAVE", type: "EV", nameVi: "Nghỉ phép / công tác", nameEn: "Leave / business trip", axis: "AX-EMP", category: "EVENT" },
  { id: "EV-EMP-DISCIPLINE", type: "EV", nameVi: "Xử lý kỷ luật lao động", nameEn: "Labor discipline handling", axis: "AX-EMP", category: "EVENT" },
  { id: "EV-EMP-TERMINATION", type: "EV", nameVi: "Chấm dứt HĐLĐ / nghỉ việc", nameEn: "Termination / resignation", axis: "AX-EMP", category: "EVENT" },
  { id: "EV-EMP-LICENSE", type: "EV", nameVi: "Biến động nhân sự hành nghề chứng khoán", nameEn: "Change in licensed securities personnel", axis: "AX-EMP", category: "EVENT" },
];

const RAW_EDGES = [
  ["ST-LABOR-LOCAL", "LB-LAW-LABOR", "RELATED_TO"],
  ["ST-LABOR-LOCAL", "DOC-LABOR-ILR", "SUPERVISES/RECEIVES"],
  ["ST-LABOR-LOCAL", "DOC-LABOR-CLA", "SUPERVISES/RECEIVES"],
  ["ST-BHXH-LOCAL", "LB-LAW-SOCIAL-SI", "RELATED_TO"],
  ["ST-BHXH-LOCAL", "LB-LAW-SOCIAL-HI", "RELATED_TO"],
  ["ST-BHXH-LOCAL", "DOC-BHXH-REGISTER", "SUPERVISES/RECEIVES"],
  ["ST-TAX-LOCAL", "LB-LAW-TAX-PIT", "RELATED_TO"],
  ["ST-SSC", "LB-LAW-SEC", "RELATED_TO"],
  ["ST-SSC", "LB-CIR-SEC-PRACT", "RELATED_TO"],
  ["ST-SSC", "DOC-SEC-PRACTICE", "SUPERVISES/RECEIVES"],
  ["ST-CANDIDATE", "DOC-HR-JD", "RELATED_TO"],
  ["ST-CANDIDATE", "PR-HR-RECRUIT-01", "RELATED_TO"],
  ["ST-INTERN", "DOC-HR-INTERN", "RELATED_TO"],
  ["ST-UNION", "DOC-LABOR-CLA", "RELATED_TO"],
  ["ST-EMPLOYEE", "DOC-HR-LC", "RELATED_TO"],
  ["ST-EMPLOYEE", "DOC-HR-NDA", "RELATED_TO"],
  ["ST-EMPLOYEE", "DOC-HR-CODE", "RELATED_TO"],
  ["ST-EMPLOYEE", "DOC-BHXH-REGISTER", "RELATED_TO"],
  ["ST-EMPLOYEE", "PR-HR-ONBOARD-01", "RELATED_TO"],
  ["ST-EMPLOYEE", "PR-HR-CONTRACT-01", "RELATED_TO"],
  ["ST-EMPLOYEE", "PR-HR-DISCIPLINE-01", "RELATED_TO"],
  ["ST-EMPLOYEE", "PR-HR-PAYROLL-01", "RELATED_TO"],
  ["ST-EMPLOYEE", "PR-HR-BENEFIT-01", "RELATED_TO"],
  ["ST-EMPLOYEE", "PR-HR-PERFORMANCE-01", "RELATED_TO"],
  ["ST-EMPLOYEE", "PR-HR-LEAVE-01", "RELATED_TO"],
  ["ST-EMPLOYEE", "PR-HR-BUSINESSTRIP-01", "RELATED_TO"],
  ["ST-EMPLOYEE", "PR-HR-OFFBOARD-01", "RELATED_TO"],
  ["LB-LAW-LABOR", "DOC-HR-JD", "BASIS_FOR"],
  ["LB-LAW-LABOR", "DOC-HR-INTERN", "BASIS_FOR"],
  ["LB-LAW-LABOR", "DOC-HR-LC", "BASIS_FOR"],
  ["LB-LAW-LABOR", "DOC-HR-NDA", "BASIS_FOR"],
  ["LB-LAW-LABOR", "DOC-LABOR-ILR", "BASIS_FOR"],
  ["LB-LAW-LABOR", "DOC-LABOR-CLA", "BASIS_FOR"],
  ["LB-LAW-LABOR", "DOC-HR-CODE", "BASIS_FOR"],
  ["LB-LAW-LABOR", "DOC-BHXH-REGISTER", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-RECRUIT-01", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-ONBOARD-01", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-CONTRACT-01", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-DISCIPLINE-01", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-PAYROLL-01", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-BENEFIT-01", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-PERFORMANCE-01", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-LEAVE-01", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-BUSINESSTRIP-01", "BASIS_FOR"],
  ["LB-LAW-LABOR", "PR-HR-OFFBOARD-01", "BASIS_FOR"],
  ["LB-LAW-SOCIAL-SI", "DOC-BHXH-REGISTER", "BASIS_FOR"],
  ["LB-LAW-SOCIAL-HI", "DOC-BHXH-REGISTER", "BASIS_FOR"],
  ["LB-LAW-TAX-PIT", "PR-HR-PAYROLL-01", "BASIS_FOR"],
  ["LB-LAW-TAX-PIT", "PR-HR-BENEFIT-01", "BASIS_FOR"],
  ["LB-LAW-SEC", "DOC-SEC-PRACTICE", "BASIS_FOR"],
  ["LB-CIR-SEC-PRACT", "DOC-SEC-PRACTICE", "BASIS_FOR"],
  ["LB-LAW-PDP", "DOC-HR-NDA", "BASIS_FOR"],
  ["LB-LAW-PDP", "PR-HR-RECRUIT-01", "BASIS_FOR"],
  ["LB-LAW-PDP", "PR-HR-ONBOARD-01", "BASIS_FOR"],
  ["LB-LAW-PDP", "PR-HR-OFFBOARD-01", "BASIS_FOR"],
  ["EV-EMP-RECRUIT", "PR-HR-RECRUIT-01", "TRIGGERS"],
  ["EV-EMP-RECRUIT", "DOC-HR-JD", "TRIGGERS"],
  ["EV-EMP-RECRUIT", "DOC-HR-INTERN", "TRIGGERS"],
  ["EV-EMP-ONBOARD", "PR-HR-ONBOARD-01", "TRIGGERS"],
  ["EV-EMP-ONBOARD", "PR-HR-CONTRACT-01", "TRIGGERS"],
  ["EV-EMP-ONBOARD", "DOC-HR-LC", "TRIGGERS"],
  ["EV-EMP-ONBOARD", "DOC-BHXH-REGISTER", "TRIGGERS"],
  ["EV-EMP-PAYROLL", "PR-HR-PAYROLL-01", "TRIGGERS"],
  ["EV-EMP-PAYROLL", "PR-HR-BENEFIT-01", "TRIGGERS"],
  ["EV-EMP-PAYROLL", "DOC-BHXH-REGISTER", "TRIGGERS"],
  ["EV-EMP-LEAVE", "PR-HR-LEAVE-01", "TRIGGERS"],
  ["EV-EMP-LEAVE", "PR-HR-BUSINESSTRIP-01", "TRIGGERS"],
  ["EV-EMP-DISCIPLINE", "PR-HR-DISCIPLINE-01", "TRIGGERS"],
  ["EV-EMP-DISCIPLINE", "DOC-LABOR-ILR", "TRIGGERS"],
  ["EV-EMP-TERMINATION", "PR-HR-OFFBOARD-01", "TRIGGERS"],
  ["EV-EMP-TERMINATION", "PR-HR-CONTRACT-01", "TRIGGERS"],
  ["EV-EMP-TERMINATION", "DOC-HR-LC", "TRIGGERS"],
  ["EV-EMP-LICENSE", "DOC-SEC-PRACTICE", "TRIGGERS"],
  ["EV-EMP-LICENSE", "ST-SSC", "TRIGGERS"],
];

const TYPE_META = {
  ST: { label: "Stakeholder", color: "#0284c7", bg: "#e0f2fe", border: "#0369a1" },
  LB: { label: "Legal Basis", color: "#ca8a04", bg: "#fef9c3", border: "#a16207" },
  DOC: { label: "Document", color: "#16a34a", bg: "#dcfce7", border: "#15803d" },
  PR: { label: "Process", color: "#ea580c", bg: "#ffedd5", border: "#c2410c" },
  EV: { label: "Event", color: "#dc2626", bg: "#fee2e2", border: "#b91c1c" },
};

const REL_META = {
  BASIS_FOR: { label: "Basis for", color: "#64748b" },
  RELATED_TO: { label: "Related to", color: "#0ea5e9" },
  TRIGGERS: { label: "Triggers", color: "#f59e0b" },
  "SUPERVISES/RECEIVES": { label: "Supervises / Receives", color: "#7c3aed" },
};

const ORDER = ["ST", "LB", "DOC", "PR", "EV"];
const X_BY_TYPE = { ST: 0, LB: 320, DOC: 640, PR: 960, EV: 1280 };
const CARD_W = 240;
const CARD_H = 84;

function getNeighbors(seedId, edges, depth = 1) {
  const visited = new Set([seedId]);
  let frontier = new Set([seedId]);
  for (let i = 0; i < depth; i += 1) {
    const next = new Set();
    edges.forEach((e) => {
      if (frontier.has(e.source) && !visited.has(e.target)) {
        visited.add(e.target);
        next.add(e.target);
      }
      if (frontier.has(e.target) && !visited.has(e.source)) {
        visited.add(e.source);
        next.add(e.source);
      }
    });
    frontier = next;
    if (!frontier.size) break;
  }
  return visited;
}

function buildPositions(nodes) {
  const grouped = ORDER.reduce((acc, type) => ({ ...acc, [type]: [] }), {});
  nodes.forEach((n) => grouped[n.data.raw.type].push(n));
  ORDER.forEach((type) => {
    grouped[type].sort((a, b) => a.data.label.localeCompare(b.data.label, "vi"));
    grouped[type].forEach((node, idx) => {
      node.position = { x: X_BY_TYPE[type], y: idx * 120 };
    });
  });
  return nodes;
}

function buildReactFlowData(rawNodes, rawEdges, focusId, depth, hideUnrelated) {
  const neighborhood = focusId ? getNeighbors(focusId, rawEdges, depth) : null;
  const visibleNodes = rawNodes.filter((n) => !neighborhood || !hideUnrelated || neighborhood.has(n.id));
  const visibleIds = new Set(visibleNodes.map((n) => n.id));
  const visibleEdges = rawEdges.filter((e) => visibleIds.has(e.source) && visibleIds.has(e.target));

  const nodes = buildPositions(
    visibleNodes.map((n) => ({
      id: n.id,
      type: "default",
      position: { x: 0, y: 0 },
      data: { label: n.nameVi, raw: n },
      sourcePosition: "right",
      targetPosition: "left",
      style: {
        width: CARD_W,
        minHeight: CARD_H,
        borderRadius: 18,
        border: `2px solid ${TYPE_META[n.type].border}`,
        background: TYPE_META[n.type].bg,
        color: "#0f172a",
        boxShadow: "0 1px 3px rgba(15,23,42,0.08)",
        fontSize: 13,
        fontWeight: 600,
        padding: 12,
      },
    }))
  );

  const edges = visibleEdges.map((e, idx) => ({
    id: `edge-${idx}`,
    source: e.source,
    target: e.target,
    label: REL_META[e.rel]?.label || e.rel,
    type: "smoothstep",
    animated: e.rel === "TRIGGERS",
    markerEnd: { type: MarkerType.ArrowClosed, color: REL_META[e.rel]?.color || "#94a3b8" },
    style: { stroke: REL_META[e.rel]?.color || "#94a3b8", strokeWidth: 1.6 },
    labelStyle: { fill: "#475569", fontSize: 11, fontWeight: 600 },
  }));

  return { nodes, edges };
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-lg font-bold text-slate-900">{value}</div>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [focusId, setFocusId] = useState(null);
  const [focusDepth, setFocusDepth] = useState(1);
  const [hideUnrelated, setHideUnrelated] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState(ORDER);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const filteredNodes = useMemo(() => {
    const q = search.trim().toLowerCase();
    return RAW_NODES.filter((n) => {
      if (!selectedTypes.includes(n.type)) return false;
      if (!q) return true;
      return [n.id, n.nameVi, n.nameEn, n.note, n.category].join(" ").toLowerCase().includes(q);
    });
  }, [search, selectedTypes]);

  const visibleIds = useMemo(() => new Set(filteredNodes.map((n) => n.id)), [filteredNodes]);

  const filteredEdges = useMemo(
    () => RAW_EDGES.filter(([source, target]) => visibleIds.has(source) && visibleIds.has(target)).map(([source, target, rel]) => ({ source, target, rel })),
    [visibleIds]
  );

  const flowData = useMemo(
    () => buildReactFlowData(filteredNodes, filteredEdges, focusId, focusDepth, hideUnrelated),
    [filteredNodes, filteredEdges, focusId, focusDepth, hideUnrelated]
  );

  const selectedNode = useMemo(() => RAW_NODES.find((n) => n.id === selectedNodeId) || null, [selectedNodeId]);
  const relatedItems = useMemo(() => {
    if (!selectedNodeId) return [];
    return filteredEdges
      .filter((e) => e.source === selectedNodeId || e.target === selectedNodeId)
      .map((e, idx) => {
        const otherId = e.source === selectedNodeId ? e.target : e.source;
        return { ...e, idx, other: RAW_NODES.find((n) => n.id === otherId) };
      });
  }, [selectedNodeId, filteredEdges]);

  useEffect(() => {
    if (selectedNodeId && !visibleIds.has(selectedNodeId)) setSelectedNodeId(null);
    if (focusId && !visibleIds.has(focusId)) setFocusId(null);
  }, [visibleIds, selectedNodeId, focusId]);

  const counts = useMemo(() => ORDER.map((type) => ({ type, count: flowData.nodes.filter((n) => n.data.raw.type === type).length })), [flowData.nodes]);

  return (
    <div className="h-screen w-full bg-slate-100 text-slate-900">
      <div className="grid h-full grid-cols-[310px_1fr_350px]">
        <aside className="overflow-y-auto border-r border-slate-200 bg-white p-5">
          <div className="mb-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Legal Navigator</div>
            <h1 className="mt-1 text-xl font-bold">AX-EMP · Employment Relationship Map</h1>
            <p className="mt-2 text-sm text-slate-600">Bản web focus vào law → document → process → event, dễ đọc hơn network rối.</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Search</div>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Tìm theo mã hoặc tên..." className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500" />
            </div>

            <div className="rounded-2xl border border-slate-200 p-3">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Object types</div>
              <div className="flex flex-wrap gap-2">
                {ORDER.map((type) => {
                  const active = selectedTypes.includes(type);
                  return (
                    <button
                      key={type}
                      onClick={() => setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))}
                      className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                      style={{ background: active ? TYPE_META[type].color : "white", color: active ? "white" : TYPE_META[type].border, borderColor: TYPE_META[type].border }}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-3">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Focus settings</div>
              <div className="space-y-3 text-sm">
                <label className="flex items-center justify-between gap-3">
                  <span>Hide unrelated nodes</span>
                  <input type="checkbox" checked={hideUnrelated} onChange={(e) => setHideUnrelated(e.target.checked)} />
                </label>
                <label className="block">
                  <div className="mb-1">Focus depth</div>
                  <select value={focusDepth} onChange={(e) => setFocusDepth(Number(e.target.value))} className="w-full rounded-xl border border-slate-300 px-3 py-2">
                    <option value={1}>1 step</option>
                    <option value={2}>2 steps</option>
                    <option value={3}>3 steps</option>
                  </select>
                </label>
                <button onClick={() => { setFocusId(null); setSelectedNodeId(null); setSearch(""); setSelectedTypes(ORDER); }} className="w-full rounded-xl bg-slate-900 px-4 py-2.5 font-semibold text-white hover:bg-slate-800">
                  Reset view
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Legend</div>
              <div className="space-y-2 text-sm">
                {ORDER.map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full" style={{ background: TYPE_META[type].color }} />
                    <span className="font-medium">{type}</span>
                    <span className="text-slate-500">· {TYPE_META[type].label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="relative h-full bg-slate-50">
          <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-3">
            <Stat label="Visible nodes" value={flowData.nodes.length} />
            <Stat label="Visible edges" value={flowData.edges.length} />
            {counts.map((item) => <Stat key={item.type} label={item.type} value={item.count} />)}
          </div>
          <div className="absolute bottom-4 left-4 z-10 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-sm text-slate-600 shadow-sm">
            <div><strong>Tip:</strong> click một luật hoặc một process để chỉ hiện phần liên quan.</div>
            <div className="mt-1">Layout đang cố định theo tầng: Stakeholder → Legal Basis → Document → Process → Event.</div>
          </div>
          <ReactFlow
            nodes={flowData.nodes}
            edges={flowData.edges}
            onNodeClick={(_, node) => { setSelectedNodeId(node.id); setFocusId(node.id); }}
            fitView
            fitViewOptions={{ padding: 0.2 }}
            proOptions={{ hideAttribution: true }}
            nodesDraggable
            elementsSelectable
          >
            <MiniMap pannable zoomable nodeColor={(node) => TYPE_META[node.data?.raw?.type || "DOC"]?.color || "#94a3b8"} />
            <Controls position="bottom-left" />
            <Background gap={20} size={1} color="#cbd5e1" />
          </ReactFlow>
        </main>

        <aside className="overflow-y-auto border-l border-slate-200 bg-white p-5">
          <div className="mb-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Inspector</div>
            <h2 className="mt-1 text-lg font-bold">{selectedNode ? selectedNode.nameVi : "Chưa chọn node"}</h2>
            <p className="mt-1 text-sm text-slate-500">{selectedNode ? `${selectedNode.id} · ${TYPE_META[selectedNode.type]?.label}` : "Click một node ở giữa để xem chi tiết."}</p>
          </div>

          {selectedNode ? (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="mb-2 inline-flex rounded-full px-2 py-1 text-xs font-semibold text-white" style={{ background: TYPE_META[selectedNode.type].color }}>{selectedNode.type}</div>
                <div className="text-sm leading-6 text-slate-700">{selectedNode.note || "Chưa có mô tả bổ sung trong mẫu web này."}</div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 text-sm leading-6 text-slate-700">
                <div><span className="font-semibold">English:</span> {selectedNode.nameEn}</div>
                <div><span className="font-semibold">Axis:</span> {selectedNode.axis}</div>
                <div><span className="font-semibold">Category:</span> {selectedNode.category}</div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Connected items</div>
                <div className="space-y-3">
                  {relatedItems.length ? relatedItems.map((item) => (
                    <button
                      key={`${item.source}-${item.target}-${item.idx}`}
                      onClick={() => { const otherId = item.source === selectedNodeId ? item.target : item.source; setSelectedNodeId(otherId); setFocusId(otherId); }}
                      className="w-full rounded-xl border border-slate-200 p-3 text-left hover:border-slate-400 hover:bg-slate-50"
                    >
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide" style={{ color: REL_META[item.rel]?.color || "#64748b" }}>{REL_META[item.rel]?.label || item.rel}</div>
                      <div className="text-sm font-semibold text-slate-900">{item.other?.nameVi || (item.source === selectedNodeId ? item.target : item.source)}</div>
                    </button>
                  )) : <div className="text-sm text-slate-500">Node này chưa có kết nối trong view hiện tại.</div>}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm leading-6 text-slate-600">
              Gợi ý dùng:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Click một luật để xem tài liệu và quy trình liên quan.</li>
                <li>Click một stakeholder để xem họ tác động đến nhóm hồ sơ nào.</li>
                <li>Bật <strong>Hide unrelated nodes</strong> để chuyển sang chế độ legal navigator.</li>
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default function LegalEmploymentNavigator() {
  return (
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  );
}
