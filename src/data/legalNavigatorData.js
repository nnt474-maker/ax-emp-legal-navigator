export const AXIS_FILTER_ORDER = [
  "ALL",
  "AX-EMP",
  "AX-SUP"
];

export const AXIS_META = {
  "ALL": {
    "code": "ALL",
    "short": "ALL",
    "label": "Tất cả",
    "title": "Legal Navigator · AX-EMP + AX-SUP",
    "description": "Tra cứu đồng thời hai nhánh Quan hệ lao động và Quan hệ giám sát / quy định trong cùng một sơ đồ."
  },
  "AX-EMP": {
    "code": "AX-EMP",
    "short": "AX-EMP",
    "label": "Quan hệ lao động",
    "title": "AX-EMP · Bản đồ quan hệ lao động",
    "description": "Tra nhanh người lao động, hồ sơ nhân sự, quy trình HR và sự kiện vận hành trong nhánh lao động."
  },
  "AX-SUP": {
    "code": "AX-SUP",
    "short": "AX-SUP",
    "label": "Quan hệ giám sát / quy định",
    "title": "AX-SUP · Bản đồ giám sát / quy định",
    "description": "Tra nhanh cơ quan giám sát, căn cứ pháp lý, hồ sơ báo cáo / cấp phép và quy trình tuân thủ của PHS."
  }
};

export const TYPE_ORDER = [
  "ST",
  "LB",
  "DOC",
  "PR",
  "EV"
];

export const TYPE_META = {
  "ST": {
    "code": "ST",
    "label": "Bên liên quan",
    "color": "#0f7fe6",
    "bg": "#eaf4ff",
    "border": "#0b63b5"
  },
  "LB": {
    "code": "LB",
    "label": "Cơ sở pháp lý",
    "color": "#c79000",
    "bg": "#fff7db",
    "border": "#9f6f00"
  },
  "DOC": {
    "code": "DOC",
    "label": "Tài liệu / hồ sơ",
    "color": "#179b48",
    "bg": "#e8fbef",
    "border": "#117537"
  },
  "PR": {
    "code": "PR",
    "label": "Quy trình",
    "color": "#f06a00",
    "bg": "#fff0e2",
    "border": "#c95600"
  },
  "EV": {
    "code": "EV",
    "label": "Sự kiện",
    "color": "#e24545",
    "bg": "#ffebeb",
    "border": "#bc2f2f"
  }
};

export const REL_META = {
  "BASIS_FOR": {
    "label": "Cơ sở cho",
    "color": "#5b6b80",
    "dash": null
  },
  "RELATED_TO": {
    "label": "Liên quan",
    "color": "#1a8ff0",
    "dash": null
  },
  "TRIGGERS": {
    "label": "Kích hoạt",
    "color": "#ee9b00",
    "dash": null
  },
  "SUPERVISES/RECEIVES": {
    "label": "Quản lý / tiếp nhận",
    "color": "#8457d4",
    "dash": "6 5"
  },
  "ISSUES/ADMINISTERS": {
    "label": "Ban hành / điều hành",
    "color": "#6a4cc2",
    "dash": "2 0"
  }
};

export const RAW_NODES = [
  {
    "type": "ST",
    "id": "ST-EMPLOYEE",
    "nameVi": "Người lao động",
    "nameEn": "Employees",
    "axis": "AX-EMP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": null,
    "note": "Đầu mối chính của đa số hồ sơ / quy trình AX-EMP.",
    "order": 1,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-CANDIDATE",
    "nameVi": "Ứng viên",
    "nameEn": "Job candidates",
    "axis": "AX-EMP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-CANDIDATE",
    "lbListSuggested": null,
    "note": "Áp dụng cho giai đoạn tuyển dụng.",
    "order": 2,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-INTERN",
    "nameVi": "Thực tập sinh",
    "nameEn": "Interns",
    "axis": "AX-EMP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-INTERN",
    "lbListSuggested": null,
    "note": "Áp dụng cho hồ sơ thực tập.",
    "order": 3,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-UNION",
    "nameVi": "Tập thể người lao động / Công đoàn",
    "nameEn": "Employee collective / Trade union",
    "axis": "AX-EMP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-UNION",
    "lbListSuggested": null,
    "note": "Liên quan thỏa ước lao động tập thể nếu có.",
    "order": 4,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-LABOR-LOCAL",
    "nameVi": "Cơ quan lao động địa phương",
    "nameEn": "Local Labour Authority",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-LABOR-LOCAL",
    "lbListSuggested": null,
    "note": "AX-EMP: Chỉ áp dụng cho nhóm hồ sơ có nghĩa vụ lao động đối ngoại cụ thể.\n\nAX-SUP: Cơ quan lao động địa phương là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 5,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ],
    "overlapAxes": [
      "AX-EMP"
    ]
  },
  {
    "type": "ST",
    "id": "ST-BHXH-LOCAL",
    "nameVi": "Cơ quan Bảo hiểm xã hội địa phương",
    "nameEn": "Local Social Insurance Agency",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-BHXH-LOCAL",
    "lbListSuggested": null,
    "note": "AX-EMP: Áp dụng cho hồ sơ BHXH, BHYT, BHTN.\n\nAX-SUP: Cơ quan Bảo hiểm xã hội địa phương là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 6,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ],
    "overlapAxes": [
      "AX-EMP"
    ]
  },
  {
    "type": "ST",
    "id": "ST-TAX-LOCAL",
    "nameVi": "Cục Thuế địa phương",
    "nameEn": "Local Tax Department",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-TAX-LOCAL",
    "lbListSuggested": null,
    "note": "AX-EMP: Chủ yếu overlap khi xét PIT/payroll.\n\nAX-SUP: Cục Thuế địa phương là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 7,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ],
    "overlapAxes": [
      "AX-EMP"
    ]
  },
  {
    "type": "ST",
    "id": "ST-SSC",
    "nameVi": "Ủy ban Chứng khoán Nhà nước (SSC)",
    "nameEn": "State Securities Commission",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": null,
    "note": "AX-EMP: Chỉ áp dụng hạn chế cho nhân sự hành nghề chứng khoán.\n\nAX-SUP: Ủy ban Chứng khoán Nhà nước (SSC) là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 8,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ],
    "overlapAxes": [
      "AX-EMP"
    ]
  },
  {
    "type": "ST",
    "id": "ST-MOF",
    "nameVi": "Bộ Tài chính",
    "nameEn": "Ministry of Finance",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-MOF",
    "lbListSuggested": null,
    "note": "Bộ Tài chính là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 9,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-VNX",
    "nameVi": "Sở Giao dịch Chứng khoán Việt Nam (VNX)",
    "nameEn": "Vietnam Stock Exchange",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-VNX",
    "lbListSuggested": null,
    "note": "Sở Giao dịch Chứng khoán Việt Nam (VNX) là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 10,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-HOSE",
    "nameVi": "Sở Giao dịch Chứng khoán TP.HCM (HOSE)",
    "nameEn": "Ho Chi Minh Stock Exchange",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-HOSE",
    "lbListSuggested": null,
    "note": "Sở Giao dịch Chứng khoán TP.HCM (HOSE) là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 11,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-HNX",
    "nameVi": "Sở Giao dịch Chứng khoán Hà Nội (HNX)",
    "nameEn": "Hanoi Stock Exchange",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-HNX",
    "lbListSuggested": null,
    "note": "Sở Giao dịch Chứng khoán Hà Nội (HNX) là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 12,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-VSDC",
    "nameVi": "Tổng công ty Lưu ký và Bù trừ CK Việt Nam (VSDC)",
    "nameEn": "Vietnam Securities Depository and Clearing Corporation",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": null,
    "note": "Tổng công ty Lưu ký và Bù trừ CK Việt Nam (VSDC) là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 13,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-GDT",
    "nameVi": "Tổng cục Thuế",
    "nameEn": "General Department of Taxation",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-GDT",
    "lbListSuggested": null,
    "note": "Tổng cục Thuế là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 14,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-DOF-PROV",
    "nameVi": "Sở Tài chính cấp tỉnh/thành phố (Phòng ĐKKD/Đầu tư)",
    "nameEn": "Provincial Department of Finance (Business Registration/Investment)",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-DOF-PROV",
    "lbListSuggested": null,
    "note": "Sở Tài chính cấp tỉnh/thành phố (Phòng ĐKKD/Đầu tư) là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 15,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-MOLISA",
    "nameVi": "Bộ Lao động – Thương binh và Xã hội",
    "nameEn": "Ministry of Labour, Invalids and Social Affairs",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-MOLISA",
    "lbListSuggested": null,
    "note": "Bộ Lao động – Thương binh và Xã hội là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 16,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-SBV",
    "nameVi": "Ngân hàng Nhà nước Việt Nam (SBV)",
    "nameEn": "State Bank of Vietnam",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-SBV",
    "lbListSuggested": null,
    "note": "Ngân hàng Nhà nước Việt Nam (SBV) là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 17,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-SBV-BRANCH",
    "nameVi": "NHNN Chi nhánh địa phương",
    "nameEn": "SBV Local Branch",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-SBV-BRANCH",
    "lbListSuggested": null,
    "note": "NHNN Chi nhánh địa phương là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 18,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-SBV-AML",
    "nameVi": "FIU/Đầu mối Phòng, chống rửa tiền thuộc NHNN",
    "nameEn": "FIU / AML Unit of SBV",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-SBV-AML",
    "lbListSuggested": null,
    "note": "FIU/Đầu mối Phòng, chống rửa tiền thuộc NHNN là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 19,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-GOVINSPECT",
    "nameVi": "Thanh tra Chính phủ/Thanh tra Bộ Tài chính/Thanh tra SSC",
    "nameEn": "Government Inspectorate / MoF Inspectorate / SSC Inspectorate",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-GOVINSPECT",
    "lbListSuggested": null,
    "note": "Thanh tra Chính phủ/Thanh tra Bộ Tài chính/Thanh tra SSC là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 20,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-STATEAUDIT",
    "nameVi": "Kiểm toán Nhà nước",
    "nameEn": "State Audit Office of Vietnam",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-STATEAUDIT",
    "lbListSuggested": null,
    "note": "Kiểm toán Nhà nước là đầu mối giám sát, cấp phép, tiếp nhận hồ sơ hoặc thanh tra trong nhánh AX-SUP.",
    "order": 21,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "ST",
    "id": "ST-PAYBANK",
    "nameVi": "Ngân hàng thanh toán",
    "nameEn": "Payment banks",
    "axis": "AX-SUP",
    "category": "STAKEHOLDER",
    "stPrimarySuggested": "ST-PAYBANK",
    "lbListSuggested": null,
    "note": "Đầu mối tiếp nhận hồ sơ mở/đóng tài khoản và kết nối thanh toán.",
    "order": 22,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-SOCIAL-SI",
    "nameVi": "Luật Bảo hiểm xã hội",
    "nameEn": "Law on Social Insurance",
    "axis": "AX-EMP",
    "category": "LEGAL_BASIS",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": null,
    "order": 1,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-SOCIAL-HI",
    "nameVi": "Luật Bảo hiểm y tế",
    "nameEn": "Law on Health Insurance",
    "axis": "AX-EMP",
    "category": "LEGAL_BASIS",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": null,
    "order": 2,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-TAX-PIT",
    "nameVi": "Luật Thuế thu nhập cá nhân",
    "nameEn": "Law on Personal Income Tax",
    "axis": "AX-EMP",
    "category": "LEGAL_BASIS",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": null,
    "order": 3,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-CIR-SEC-PRACT",
    "nameVi": "Thông tư 135/2025/TT-BTC về hành nghề chứng khoán",
    "nameEn": "Circular 135/2025/TT-BTC on securities practice",
    "axis": "AX-EMP",
    "category": "LEGAL_BASIS",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": null,
    "order": 4,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-OTHER-PDP",
    "nameVi": "Luật Bảo vệ dữ liệu cá nhân",
    "nameEn": "Law on Personal Data Protection",
    "axis": "AX-EMP",
    "category": "LEGAL_BASIS",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": null,
    "order": 5,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-OTHER-356",
    "nameVi": "Nghị định 356/2025/NĐ-CP hướng dẫn Luật Bảo vệ dữ liệu cá nhân",
    "nameEn": "Decree 356/2025/ND-CP guiding the Law on Personal Data Protection",
    "axis": "AX-EMP",
    "category": "LEGAL_BASIS",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": null,
    "order": 6,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-LABOR-145",
    "nameVi": "Nghị định 145/2020/NĐ-CP hướng dẫn Bộ luật Lao động",
    "nameEn": "Decree 145/2020/ND-CP guiding the Labor Code",
    "axis": "AX-EMP",
    "category": "LEGAL_BASIS",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": null,
    "order": 7,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-LABOR-337",
    "nameVi": "Nghị định 337/2025/NĐ-CP về hợp đồng lao động điện tử",
    "nameEn": "Decree 337/2025/ND-CP on electronic labor contracts",
    "axis": "AX-EMP",
    "category": "LEGAL_BASIS",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": null,
    "order": 8,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-LABOR-293",
    "nameVi": "Nghị định 293/2025/NĐ-CP về mức lương tối thiểu",
    "nameEn": "Decree 293/2025/ND-CP on minimum wage",
    "axis": "AX-EMP",
    "category": "LEGAL_BASIS",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": null,
    "order": 9,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-LABOR",
    "nameVi": "Bộ luật Lao động",
    "nameEn": "Labour Code",
    "axis": "AX-SUP",
    "category": "Law",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Bộ luật Lao động là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 10,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ],
    "overlapAxes": [
      "AX-EMP"
    ]
  },
  {
    "type": "LB",
    "id": "LB-LAW-SEC",
    "nameVi": "Luật Chứng khoán",
    "nameEn": "Law on Securities",
    "axis": "AX-SUP",
    "category": "Law",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Luật Chứng khoán là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 11,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ],
    "overlapAxes": [
      "AX-EMP"
    ]
  },
  {
    "type": "LB",
    "id": "LB-LAW-ENT",
    "nameVi": "Luật Doanh nghiệp",
    "nameEn": "Law on Enterprises",
    "axis": "AX-SUP",
    "category": "Law",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Luật Doanh nghiệp là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 12,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-INV",
    "nameVi": "Luật Đầu tư",
    "nameEn": "Law on Investment",
    "axis": "AX-SUP",
    "category": "Law",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Luật Đầu tư là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 13,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-AML",
    "nameVi": "Luật Phòng, chống rửa tiền",
    "nameEn": "Law on Anti-Money Laundering",
    "axis": "AX-SUP",
    "category": "Law",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Luật Phòng, chống rửa tiền là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 14,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-TAX",
    "nameVi": "Luật Quản lý thuế và các Luật thuế liên quan",
    "nameEn": "Law on Tax Administration and related tax laws",
    "axis": "AX-SUP",
    "category": "Law",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Luật Quản lý thuế và các Luật thuế liên quan là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 15,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-SOCIAL",
    "nameVi": "Luật BHXH, Luật Việc làm (BHTN)",
    "nameEn": "Law on Social Insurance & Employment (Unemployment Insurance)",
    "axis": "AX-SUP",
    "category": "Law",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Luật BHXH, Luật Việc làm (BHTN) là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 16,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-LAW-SBV",
    "nameVi": "Luật NHNN, Luật Các tổ chức tín dụng",
    "nameEn": "Law on SBV & Law on Credit Institutions",
    "axis": "AX-SUP",
    "category": "Law",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Luật NHNN, Luật Các tổ chức tín dụng là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 17,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-SEC-155",
    "nameVi": "Nghị định 155/2020/NĐ-CP và các sửa đổi",
    "nameEn": "Decree 155/2020/ND-CP and amendments",
    "axis": "AX-SUP",
    "category": "Decree",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Nghị định 155/2020/NĐ-CP và các sửa đổi là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 18,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-SEC-156",
    "nameVi": "Nghị định 156/2020/NĐ-CP và văn bản thay thế",
    "nameEn": "Decree 156/2020/ND-CP and successors",
    "axis": "AX-SUP",
    "category": "Decree",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Nghị định 156/2020/NĐ-CP và văn bản thay thế là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 19,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-BOND",
    "nameVi": "Nghị định về chào bán, giao dịch trái phiếu doanh nghiệp",
    "nameEn": "Decree on offering/trading corporate bonds",
    "axis": "AX-SUP",
    "category": "Decree",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Nghị định về chào bán, giao dịch trái phiếu doanh nghiệp là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 20,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-TAX",
    "nameVi": "Nghị định hướng dẫn Luật Quản lý thuế",
    "nameEn": "Decree guiding the Law on Tax Administration",
    "axis": "AX-SUP",
    "category": "Decree",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Nghị định hướng dẫn Luật Quản lý thuế là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 21,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-AML",
    "nameVi": "Nghị định hướng dẫn Luật Phòng, chống rửa tiền",
    "nameEn": "Decree guiding AML Law",
    "axis": "AX-SUP",
    "category": "Decree",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Nghị định hướng dẫn Luật Phòng, chống rửa tiền là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 22,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-DEC-LABOR",
    "nameVi": "Nghị định hướng dẫn Bộ luật Lao động/BHXH/BHTN",
    "nameEn": "Decree guiding Labour/Social/Unemployment rules",
    "axis": "AX-SUP",
    "category": "Decree",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Nghị định hướng dẫn Bộ luật Lao động/BHXH/BHTN là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 23,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-CIR-SEC-DISC",
    "nameVi": "Thông tư về công bố thông tin trên thị trường chứng khoán",
    "nameEn": "Circular on information disclosure",
    "axis": "AX-SUP",
    "category": "Circular",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Thông tư về công bố thông tin trên thị trường chứng khoán là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 24,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-CIR-SEC-TRAD",
    "nameVi": "Thông tư về đăng ký/niêm yết/giao dịch chứng khoán, giao dịch TPCP",
    "nameEn": "Circular on registration/listing/trading securities; government bonds",
    "axis": "AX-SUP",
    "category": "Circular",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Thông tư về đăng ký/niêm yết/giao dịch chứng khoán, giao dịch TPCP là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 25,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-CIR-SEC-FIRM",
    "nameVi": "Thông tư về tổ chức, hoạt động CTCK; an toàn tài chính; quản trị rủi ro",
    "nameEn": "Circular on securities company organization/operations; financial safety; risk management",
    "axis": "AX-SUP",
    "category": "Circular",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Thông tư về tổ chức, hoạt động CTCK; an toàn tài chính; quản trị rủi ro là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 26,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-CIR-SEC-DEPOSIT",
    "nameVi": "Thông tư về đăng ký/lưu ký/bù trừ/thanh toán chứng khoán",
    "nameEn": "Circular on registration/depository/clearing/settlement",
    "axis": "AX-SUP",
    "category": "Circular",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Thông tư về đăng ký/lưu ký/bù trừ/thanh toán chứng khoán là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 27,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-CIR-SBV-PAY",
    "nameVi": "Thông tư NHNN về tài khoản thanh toán, báo cáo giao dịch, AML",
    "nameEn": "SBV Circular on payment accounts; transaction reporting; AML",
    "axis": "AX-SUP",
    "category": "Circular",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Thông tư NHNN về tài khoản thanh toán, báo cáo giao dịch, AML là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 28,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-CIR-TAX",
    "nameVi": "Thông tư hướng dẫn đăng ký thuế, kê khai, quyết toán thuế",
    "nameEn": "Tax circulars on registration, declaration, finalization",
    "axis": "AX-SUP",
    "category": "Circular",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Thông tư hướng dẫn đăng ký thuế, kê khai, quyết toán thuế là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 29,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-CIR-LABOR",
    "nameVi": "Thông tư về báo cáo lao động, tiền lương, BHXH",
    "nameEn": "Circulars on labour reporting, wages, social insurance",
    "axis": "AX-SUP",
    "category": "Circular",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Thông tư về báo cáo lao động, tiền lương, BHXH là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 30,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-REG-HOSE-LIST",
    "nameVi": "Quy chế niêm yết và giao dịch chứng khoán trên HOSE",
    "nameEn": "HOSE listing & trading regulations",
    "axis": "AX-SUP",
    "category": "Regulation",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Quy chế niêm yết và giao dịch chứng khoán trên HOSE là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 31,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-REG-HNX-LIST",
    "nameVi": "Quy chế niêm yết và giao dịch chứng khoán trên HNX",
    "nameEn": "HNX listing & trading regulations",
    "axis": "AX-SUP",
    "category": "Regulation",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Quy chế niêm yết và giao dịch chứng khoán trên HNX là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 32,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-REG-VSDC-MEM",
    "nameVi": "Quy chế thành viên/đăng ký/lưu ký/bù trừ/thanh toán của VSDC",
    "nameEn": "VSDC member/registration/depository/clearing/settlement regulations",
    "axis": "AX-SUP",
    "category": "Regulation",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Quy chế thành viên/đăng ký/lưu ký/bù trừ/thanh toán của VSDC là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 33,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-REG-SSC-REP",
    "nameVi": "Quy định SSC về chế độ báo cáo/giám sát/thanh tra CTCK",
    "nameEn": "SSC rules on reporting, supervision & inspection for securities firms",
    "axis": "AX-SUP",
    "category": "Regulation",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Quy định SSC về chế độ báo cáo/giám sát/thanh tra CTCK là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 34,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "LB",
    "id": "LB-REG-SBV-AML",
    "nameVi": "Quy định NHNN/FIU về AML áp dụng cho CTCK",
    "nameEn": "SBV/FIU AML regulations applicable to securities firms",
    "axis": "AX-SUP",
    "category": "Regulation",
    "stPrimarySuggested": null,
    "lbListSuggested": null,
    "note": "Quy định NHNN/FIU về AML áp dụng cho CTCK là căn cứ pháp lý được dùng để neo nghĩa vụ giám sát, báo cáo hoặc vận hành tuân thủ trong AX-SUP.",
    "order": 35,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-JD",
    "nameVi": "Mô tả công việc",
    "nameEn": "Job Description",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-CANDIDATE",
    "lbListSuggested": "LB-LAW-LABOR",
    "note": null,
    "order": 1,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-INTERN",
    "nameVi": "Thỏa thuận thực tập",
    "nameEn": "Intern Agreement",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-INTERN",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-OTHER-PDP",
    "note": null,
    "order": 2,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-LC",
    "nameVi": "Hợp đồng lao động",
    "nameEn": "Labor Contract",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-DEC-LABOR-337",
    "note": "Dùng HR domain theo legend table vì đây là hồ sơ nhân sự cốt lõi.",
    "order": 3,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-NDA",
    "nameVi": "Thỏa thuận bảo mật (NDA)",
    "nameEn": "Non-Disclosure Agreement (NDA)",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-OTHER-PDP; LB-DEC-OTHER-356",
    "note": null,
    "order": 4,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-LABOR-ILR",
    "nameVi": "Nội quy lao động",
    "nameEn": "Internal Labor Regulations",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-LABOR-LOCAL",
    "lbListSuggested": "LB-LAW-LABOR; LB-DEC-LABOR-145",
    "note": "Dùng LABOR domain vì gắn với nghĩa vụ lao động đối ngoại/đăng ký.",
    "order": 5,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-LABOR-CLA",
    "nameVi": "Thỏa ước lao động tập thể",
    "nameEn": "Collective Labor Agreement",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-UNION",
    "lbListSuggested": "LB-LAW-LABOR; LB-DEC-LABOR-145",
    "note": "Dùng LABOR domain vì có thể phát sinh nghĩa vụ gửi/đăng ký/xuất trình.",
    "order": 6,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-CODE",
    "nameVi": "Quy tắc đạo đức nghề nghiệp",
    "nameEn": "Code of Ethics",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-SEC; LB-CIR-SEC-PRACT",
    "note": null,
    "order": 7,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-SEC-PRACT",
    "nameVi": "Chứng chỉ hành nghề chứng khoán / hồ sơ hành nghề",
    "nameEn": "Securities practising certificate / practising dossier",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-CIR-SEC-PRACT",
    "note": "Dùng SEC domain vì gắn trực tiếp với điều kiện hành nghề chứng khoán.",
    "order": 8,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-MGMTREG",
    "nameVi": "Quy chế quản lý nhân sự",
    "nameEn": "Human Resources Management Regulations",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR",
    "note": null,
    "order": 9,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-SALARYREG",
    "nameVi": "Quy chế chi trả lương nội bộ công ty",
    "nameEn": "Internal Payroll Regulation",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT; LB-DEC-LABOR-293",
    "note": null,
    "order": 10,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-SALARYSCALE",
    "nameVi": "Hệ thống thang lương, bảng lương",
    "nameEn": "Salary Scale and Payroll Table",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-DEC-LABOR-293",
    "note": null,
    "order": 11,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-BENEFITREG",
    "nameVi": "Quy chế lương, thưởng và phúc lợi",
    "nameEn": "Compensation, Bonus and Benefits Regulation",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT",
    "note": null,
    "order": 12,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-ALLOW",
    "nameVi": "Quy định về phụ cấp",
    "nameEn": "Allowance Rules",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT",
    "note": null,
    "order": 13,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-WELFARE",
    "nameVi": "Hồ sơ / tờ trình chế độ phúc lợi của PHS",
    "nameEn": "Benefit Scheme dossier / submission of PHS",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT",
    "note": null,
    "order": 14,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-ENGAGE",
    "nameVi": "Quy định chi phí hỗ trợ hoạt động gắn kết nội bộ",
    "nameEn": "Internal Engagement Support Expense Rules",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT",
    "note": null,
    "order": 15,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-BHXH-REGISTER",
    "nameVi": "Hồ sơ đăng ký BHXH/BHYT/BHTN & điều chỉnh",
    "nameEn": "SI/HI/UI registration & adjustments",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-BHXH-LOCAL",
    "lbListSuggested": "LB-LAW-SOCIAL; LB-DEC-LABOR",
    "note": "Bổ sung note về khả năng phát sinh survey/thống kê lao động riêng.\n\nGhi chú BTK: Báo cáo thống kê lao động cho Cục thống kê (survey hàng năm không phân rõ là báo cáo)\n\nHồ sơ đăng ký/điều chỉnh BHXH là nghĩa vụ với cơ quan BHXH; ngoài ra thực tế có thể phát sinh thêm báo cáo thống kê lao động/survey hằng năm ở kênh khác.\n\nTrục chính là AX-EMP; lưu ý có thể phát sinh thêm nghĩa vụ thống kê lao động riêng, không nhất thiết là cùng 1 loại 'report'.",
    "order": 16,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ],
    "overlapAxes": [
      "AX-EMP"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-HR-TRAVEL",
    "nameVi": "Chính sách chế độ công tác",
    "nameEn": "Business Trip Policy",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT",
    "note": null,
    "order": 17,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-HR-PDPNOTICE",
    "nameVi": "Thông báo bảo vệ dữ liệu",
    "nameEn": "Personal Data Protection Notice",
    "axis": "AX-EMP",
    "category": "DOCUMENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-OTHER-PDP; LB-DEC-OTHER-356",
    "note": "Dùng HR domain vì gắn với nghĩa vụ thông báo xử lý dữ liệu trong hồ sơ nhân sự; áp dụng cả cho người lao động và thực tập sinh.",
    "order": 18,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "DOC",
    "id": "DOC-LABOR-REPORT",
    "nameVi": "Báo cáo sử dụng lao động/tiền lương",
    "nameEn": "Labour & wage reports",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-LABOR-LOCAL",
    "lbListSuggested": "LB-LAW-LABOR; LB-DEC-LABOR; LB-CIR-LABOR",
    "note": "Đổi trục chính sang AX-EMP; vẫn cross-reference AX-SUP.\n\nGhi chú BTK: AX-EMP\n\nĐây là nghĩa vụ báo cáo với cơ quan lao động, nhưng xét theo bản chất quản trị nội bộ nên trục chính thiên về AX-EMP.\n\nTrục chính là AX-EMP; giữ cross-reference AX-SUP vì vẫn là nghĩa vụ báo cáo ra bên ngoài.",
    "order": 19,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ],
    "overlapAxes": [
      "AX-EMP"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-BHXH-REPORT",
    "nameVi": "Báo cáo định kỳ BHXH/BHYT/BHTN",
    "nameEn": "Periodic SI/HI/UI reports",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-BHXH-LOCAL",
    "lbListSuggested": "LB-LAW-SOCIAL; LB-DEC-LABOR",
    "note": "Có nghĩa vụ lao động/BHXH do cơ quan chuyên ngành giám sát.\n\nTrục chính là AX-EMP; giữ cross-reference AX-SUP vì vẫn là nghĩa vụ báo cáo ra bên ngoài.\n\nBáo cáo định kỳ BHXH/BHYT/BHTN là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 20,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ],
    "overlapAxes": [
      "AX-EMP"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-ENT-ERC",
    "nameVi": "GCN ĐKDN & hồ sơ thay đổi ĐKDN",
    "nameEn": "Enterprise Registration Certificate (ERC) & change filings",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-DOF-PROV",
    "lbListSuggested": "LB-LAW-ENT",
    "note": "Có nghĩa vụ đăng ký doanh nghiệp/đăng ký thay đổi với cơ quan ĐKKD.\n\nTuân thủ nội bộ để đáp ứng yêu cầu giám sát/quy định. Hồ sơ nền tảng về tư cách pháp lý/vận hành công ty.\n\nGCN ĐKDN & hồ sơ thay đổi ĐKDN là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 21,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SEC-LIC-MAIN",
    "nameVi": "Giấy phép thành lập và hoạt động CTCK",
    "nameEn": "Securities company establishment & operation license",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nGiấy phép CTCK là supervisory item nền tảng của công ty.\n\nGiấy phép thành lập và hoạt động CTCK là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 22,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SEC-LIC-BIZ",
    "nameVi": "Hồ sơ/Quyết định chấp thuận từng nghiệp vụ",
    "nameEn": "Approvals for each securities business line",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-FIRM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nHồ sơ/quyết định nghiệp vụ là supervisory item nền tảng, đồng thời gắn quản trị hoạt động.\n\nHồ sơ/Quyết định chấp thuận từng nghiệp vụ là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 23,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SEC-LIC-CAP",
    "nameVi": "Chấp thuận thay đổi vốn điều lệ CTCK",
    "nameEn": "Approval for changes in charter capital",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nThay đổi vốn điều lệ là supervisory + governance item.\n\nChấp thuận thay đổi vốn điều lệ CTCK là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 24,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SEC-LIC-HQ",
    "nameVi": "Chấp thuận thay đổi trụ sở/chi nhánh/PGD",
    "nameEn": "Approval for head office/branch/transaction office changes",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nThay đổi trụ sở là supervisory + governance item.\n\nChấp thuận thay đổi trụ sở/chi nhánh/PGD là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 25,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SEC-LIC-MAN",
    "nameVi": "Chấp thuận thay đổi TGĐ/nhân sự quản lý chủ chốt",
    "nameEn": "Approval for changes of CEO/key management",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-FIRM",
    "note": "Giữ phần regulatory ở AX-SUP; ghi rõ tài liệu nhân sự nội bộ tách sang AX-GOV.\n\nGhi chú BTK: Tài liệu nội bộ của PHS\n\nGiữ ở AX-SUP cho phần hồ sơ/chấp thuận với SSC; còn quyết định bổ nhiệm/miễn nhiệm nội bộ nên quản lý riêng tại AX-GOV.\n\nTách logic: chấp thuận/filing với SSC = AX-SUP; tài liệu nhân sự nội bộ = AX-GOV.",
    "order": 26,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-MEM-HOSE",
    "nameVi": "Hợp đồng/Thỏa thuận thành viên giao dịch HOSE",
    "nameEn": "HOSE trading membership agreement",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-HOSE",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-TRAD; LB-REG-HOSE-LIST",
    "note": "Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HOSE.\n\nGhi chú BTK: Bộ báo cáo, hồ sơ gửi riêng HOSE\n\nHợp đồng/thỏa thuận thành viên với HOSE là hồ sơ riêng theo từng đầu mối, gắn cả yếu tố giám sát, hợp đồng và vận hành dịch vụ.\n\nHồ sơ thành viên HOSE là bộ hồ sơ riêng, đồng thời là contractual + service-based.",
    "order": 27,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-MEM-HNX",
    "nameVi": "Hợp đồng/Thỏa thuận thành viên giao dịch HNX",
    "nameEn": "HNX trading membership agreement",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-HNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-TRAD; LB-REG-HNX-LIST",
    "note": "Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HNX.\n\nGhi chú BTK: Bộ báo cáo, hồ sơ gửi riêng HNX\n\nHợp đồng/thỏa thuận thành viên với HNX là hồ sơ riêng theo từng đầu mối, gắn cả yếu tố giám sát, hợp đồng và vận hành dịch vụ.\n\nHồ sơ thành viên HNX là bộ hồ sơ riêng, đồng thời là contractual + service-based.",
    "order": 28,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-MEM-VSDC",
    "nameVi": "Hợp đồng/Thỏa thuận thành viên lưu ký/bù trừ/thanh toán VSDC",
    "nameEn": "VSDC depository/clearing/settlement membership agreement",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DEPOSIT; LB-REG-VSDC-MEM",
    "note": "Hợp đồng/thỏa thuận thành viên với VSDC là hồ sơ riêng theo từng đầu mối, gắn cả yếu tố giám sát, hợp đồng và vận hành dịch vụ.\n\nHồ sơ thành viên VSDC là bộ hồ sơ riêng, đồng thời là contractual + service-based.\n\nHợp đồng/Thỏa thuận thành viên lưu ký/bù trừ/thanh toán VSDC là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 29,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-REP-SSC-PER",
    "nameVi": "Bộ báo cáo định kỳ gửi SSC",
    "nameEn": "Periodic reports to SSC",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-SSC-REP",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nTuân thủ nội bộ để đáp ứng yêu cầu giám sát/quy định. Liên quan báo cáo/CBTT/quản trị.\n\nBộ báo cáo định kỳ gửi SSC là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 30,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-FS-AUDIT",
    "nameVi": "BCTC năm đã kiểm toán & tài liệu kèm theo",
    "nameEn": "Audited annual financial statements & attachments",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nBCTC kiểm toán vừa là compliance vừa là governance/disclosure item.\n\nBCTC năm đã kiểm toán & tài liệu kèm theo là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 31,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-AML-REGISTER",
    "nameVi": "Hồ sơ đăng ký đầu mối AML",
    "nameEn": "AML focal point registration",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SBV-AML",
    "lbListSuggested": "LB-LAW-AML; LB-DEC-AML; LB-REG-SBV-AML",
    "note": "Có nghĩa vụ thuộc thanh toán/AML do NHNN/FIU giám sát.\n\nAML là chương trình compliance trọng yếu; overlap chính với AX-COM.\n\nHồ sơ đăng ký đầu mối AML là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 32,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ],
    "overlapAxes": [
      "AX-COM"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-AML-REPORT",
    "nameVi": "Báo cáo giao dịch đáng ngờ/giao dịch lớn",
    "nameEn": "Suspicious/large transaction reports",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SBV-AML",
    "lbListSuggested": "LB-LAW-AML; LB-DEC-AML; LB-REG-SBV-AML; LB-CIR-SBV-PAY",
    "note": "Có nghĩa vụ thuộc thanh toán/AML do NHNN/FIU giám sát.\n\nAML là chương trình compliance trọng yếu; overlap chính với AX-COM.\n\nBáo cáo giao dịch đáng ngờ/giao dịch lớn là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 33,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ],
    "overlapAxes": [
      "AX-COM"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-TBD-REG-REG",
    "nameVi": "Hồ sơ đăng ký/điều chỉnh với SSC/Sở/VSDC (nếu cần) (TBD)",
    "nameEn": "Registration/adjustment filings with SSC/Exchanges/VSDC (if required) (TBD)",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nTuân thủ nội bộ để đáp ứng yêu cầu giám sát/quy định.\n\nTBD code — cần chuẩn hóa ID\n\nHồ sơ đăng ký/điều chỉnh với SSC/Sở/VSDC (nếu cần) (TBD) là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 34,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-ART-01",
    "nameVi": "Điều lệ công ty (bản hiện hành)",
    "nameEn": "Company Charter (current version)",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-DOF-PROV",
    "lbListSuggested": "LB-LAW-ENT; LB-LAW-SEC",
    "note": "Đổi logic sang AX-GOV; giữ như supporting internal doc cho event thay đổi, không coi là supervisory routine item.\n\nGhi chú BTK: Điều lệ do PHS ban hành và quản lý, không gửi bc khi có update\n\nĐiều lệ là tài liệu nội bộ nền tảng của PHS. Không phải hồ sơ/báo cáo phải gửi định kỳ mỗi khi cập nhật; trong AX-SUP chỉ nên xem như tài liệu supporting khi phát sinh event thay đổi vốn/trụ sở/nghiệp vụ nếu hồ sơ yêu cầu.\n\nĐiều lệ do PHS ban hành và tự quản lý. Không coi là nghĩa vụ báo cáo/cập nhật thường xuyên; chỉ xuất hiện như tài liệu supporting trong một số hồ sơ thay đổi.",
    "order": 35,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-TBD-PROD-APPROVAL",
    "nameVi": "Hồ sơ nội bộ phê duyệt sản phẩm (TBD code)",
    "nameEn": "Internal product approval memo/policy (TBD code)",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-FIRM",
    "note": "Đổi thành internal approval doc; xếp chính ở AX-GOV/AX-SRV, chỉ cross-reference sang AX-SUP.\n\nGhi chú BTK: Tài liệu nội bộ của PHS\n\nĐây là hồ sơ nội bộ phê duyệt sản phẩm của PHS; không phải bản thân nó là hồ sơ supervisory routine.\n\nTài liệu nội bộ của PHS; giữ như supporting doc cho EV-PROD-NEW thay vì supervisory routine item.",
    "order": 36,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-TAX-REGISTER",
    "nameVi": "Hồ sơ đăng ký thuế/thay đổi thông tin",
    "nameEn": "Tax registration/change filings",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-TAX-LOCAL",
    "lbListSuggested": "LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": "Có nghĩa vụ thuế do cơ quan thuế giám sát.\n\nThuế gắn với compliance; hồ sơ đăng ký/thay đổi thông tin thuế nên cross-reference AX-SUP.\n\nHồ sơ đăng ký thuế/thay đổi thông tin là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 37,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ],
    "overlapAxes": [
      "AX-COM"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-TAX-DECL",
    "nameVi": "Báo cáo/kê khai/quyết toán thuế định kỳ",
    "nameEn": "Tax declarations & finalization",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-TAX-LOCAL",
    "lbListSuggested": "LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": "Đổi mô tả sang nghĩa vụ thuế định kỳ (kê khai/quyết toán/báo cáo).\n\nGhi chú BTK: Báo cáo thuế định kì\n\nĐây là cụm nghĩa vụ thuế định kỳ (kê khai/quyết toán/báo cáo thuế) hơn là chỉ một bộ hồ sơ tĩnh.\n\nThuế là nghĩa vụ compliance định kỳ; có thể theo dõi chính ở AX-COM và cross-reference sang AX-SUP.",
    "order": 38,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ],
    "overlapAxes": [
      "AX-COM"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-TBD-CLIENT-TC",
    "nameVi": "Tài liệu cung cấp cho khách hàng (T&Cs/Hợp đồng mẫu) (TBD)",
    "nameEn": "Client-facing documents (T&Cs/template contract) (TBD)",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-FIRM",
    "note": "Tài liệu T&Cs/hợp đồng mẫu là bộ tài liệu client-facing; trục chính là dịch vụ/hợp đồng, chỉ liên đới AX-SUP khi sản phẩm cần rà regulatory.\n\nClient-facing T&Cs/model contract -> trục chính AX-SRV + AX-CON.\n\nTBD code — cần chuẩn hóa ID\n\nTài liệu cung cấp cho khách hàng (T&Cs/Hợp đồng mẫu) (TBD) là hồ sơ/tài liệu then chốt phát sinh trong quá trình tuân thủ và làm việc với cơ quan quản lý.",
    "order": 39,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-DISC-ADHOC-EXC",
    "nameVi": "Công bố thông tin bất thường gửi Sở GDCK liên quan",
    "nameEn": "Ad-hoc disclosure to the relevant Stock Exchange",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "MULTI-ST: ST-HOSE; ST-HNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-HOSE-LIST; LB-REG-HNX-LIST",
    "note": null,
    "order": 40,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-DISC-ADHOC-SSC",
    "nameVi": "Công bố thông tin bất thường gửi SSC",
    "nameEn": "Ad-hoc disclosure to SSC",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-SSC-REP",
    "note": null,
    "order": 41,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-DISC-REGULAR-EXC",
    "nameVi": "Công bố thông tin định kỳ gửi Sở GDCK liên quan",
    "nameEn": "Periodic disclosure to the relevant Stock Exchange",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "MULTI-ST: ST-HOSE; ST-HNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-HOSE-LIST; LB-REG-HNX-LIST",
    "note": null,
    "order": 42,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-DISC-REGULAR-SSC",
    "nameVi": "Công bố thông tin định kỳ gửi SSC",
    "nameEn": "Periodic disclosure to SSC",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-SSC-REP",
    "note": null,
    "order": 43,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-INSP-DEC-LABOR",
    "nameVi": "Quyết định thanh tra, kiểm tra lao động/BHXH",
    "nameEn": "Labour/SI inspection decision",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "MULTI-ST: ST-LABOR-LOCAL; ST-BHXH-LOCAL",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-SOCIAL; LB-DEC-LABOR; LB-CIR-LABOR",
    "note": null,
    "order": 44,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-INSP-DEC-SEC",
    "nameVi": "Quyết định thanh tra, kiểm tra trong lĩnh vực chứng khoán",
    "nameEn": "Securities inspection decision",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-156; LB-REG-SSC-REP",
    "note": null,
    "order": 45,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-INSP-DEC-TAX",
    "nameVi": "Quyết định thanh tra, kiểm tra thuế",
    "nameEn": "Tax inspection decision",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-TAX-LOCAL",
    "lbListSuggested": "LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": null,
    "order": 46,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-INSP-EXPLAIN-LABOR",
    "nameVi": "Văn bản giải trình/cung cấp hồ sơ cho cơ quan lao động/BHXH",
    "nameEn": "Explanation / document submission to labour/SI authority",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "MULTI-ST: ST-LABOR-LOCAL; ST-BHXH-LOCAL",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-SOCIAL; LB-DEC-LABOR; LB-CIR-LABOR",
    "note": null,
    "order": 47,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-INSP-EXPLAIN-SEC",
    "nameVi": "Văn bản giải trình/cung cấp hồ sơ cho SSC/cơ quan chứng khoán",
    "nameEn": "Explanation / document submission to securities regulators",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-156; LB-REG-SSC-REP",
    "note": null,
    "order": 48,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-INSP-EXPLAIN-TAX",
    "nameVi": "Văn bản giải trình/cung cấp hồ sơ cho cơ quan thuế",
    "nameEn": "Explanation / document submission to tax authority",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-TAX-LOCAL",
    "lbListSuggested": "LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": null,
    "order": 49,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-INSP-WORK-LABOR",
    "nameVi": "Biên bản làm việc/biên bản vi phạm về lao động/BHXH",
    "nameEn": "Labour/SI working minutes / violation minutes",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "MULTI-ST: ST-LABOR-LOCAL; ST-BHXH-LOCAL",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-SOCIAL; LB-DEC-LABOR; LB-CIR-LABOR",
    "note": null,
    "order": 50,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-INSP-WORK-SEC",
    "nameVi": "Biên bản làm việc/biên bản vi phạm trong lĩnh vực chứng khoán",
    "nameEn": "Securities working minutes / violation minutes",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-156; LB-REG-SSC-REP",
    "note": null,
    "order": 51,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-INSP-WORK-TAX",
    "nameVi": "Biên bản làm việc/biên bản vi phạm về thuế",
    "nameEn": "Tax working minutes / violation minutes",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-TAX-LOCAL",
    "lbListSuggested": "LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": null,
    "order": 52,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-PAYBANK-ACCT",
    "nameVi": "Hồ sơ mở/đóng tài khoản thanh toán tại ngân hàng thanh toán",
    "nameEn": "Payment bank account opening/closing dossier",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-PAYBANK",
    "lbListSuggested": "LB-LAW-SBV; LB-CIR-SBV-PAY",
    "note": null,
    "order": 53,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-CON"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-PAYBANK-CONNECT",
    "nameVi": "Hồ sơ kết nối vận hành với ngân hàng thanh toán",
    "nameEn": "Payment bank system connectivity dossier",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-PAYBANK",
    "lbListSuggested": "LB-LAW-SBV; LB-CIR-SBV-PAY; LB-REG-SBV-AML",
    "note": null,
    "order": 54,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-REP-ADHOC-LABOR",
    "nameVi": "Báo cáo/giải trình theo yêu cầu của cơ quan lao động/BHXH",
    "nameEn": "Ad-hoc report/explanation to labour/SI authority",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "MULTI-ST: ST-LABOR-LOCAL; ST-BHXH-LOCAL",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-SOCIAL; LB-DEC-LABOR; LB-CIR-LABOR",
    "note": null,
    "order": 55,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-REP-ADHOC-SEC",
    "nameVi": "Báo cáo/giải trình theo yêu cầu của SSC/cơ quan chứng khoán",
    "nameEn": "Ad-hoc report/explanation to securities regulators",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-SSC-REP",
    "note": null,
    "order": 56,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-REP-ADHOC-TAX",
    "nameVi": "Báo cáo/giải trình theo yêu cầu của cơ quan thuế",
    "nameEn": "Ad-hoc report/explanation to tax authority",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-TAX-LOCAL",
    "lbListSuggested": "LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": null,
    "order": 57,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-REP-HNX-PER",
    "nameVi": "Bộ báo cáo định kỳ gửi HNX",
    "nameEn": "Periodic reports to HNX",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-HNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-HNX-LIST",
    "note": null,
    "order": 58,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-REP-HOSE-PER",
    "nameVi": "Bộ báo cáo định kỳ gửi HOSE",
    "nameEn": "Periodic reports to HOSE",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-HOSE",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-HOSE-LIST",
    "note": null,
    "order": 59,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-REP-VSDC-PER",
    "nameVi": "Bộ báo cáo định kỳ gửi VSDC",
    "nameEn": "Periodic reports to VSDC",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DEPOSIT; LB-REG-VSDC-MEM",
    "note": null,
    "order": 60,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SANC-DEC-LABOR",
    "nameVi": "Quyết định xử phạt VPHC về lao động/BHXH",
    "nameEn": "Labour/SI administrative sanction decision",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "MULTI-ST: ST-LABOR-LOCAL; ST-BHXH-LOCAL",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-SOCIAL; LB-DEC-LABOR; LB-CIR-LABOR",
    "note": null,
    "order": 61,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SANC-DEC-SEC",
    "nameVi": "Quyết định xử phạt VPHC trong lĩnh vực chứng khoán",
    "nameEn": "Securities administrative sanction decision",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-156",
    "note": null,
    "order": 62,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SANC-DEC-TAX",
    "nameVi": "Quyết định xử phạt VPHC về thuế",
    "nameEn": "Tax administrative sanction decision",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-TAX-LOCAL",
    "lbListSuggested": "LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": null,
    "order": 63,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SANC-REMEDY-LABOR",
    "nameVi": "Hồ sơ kế hoạch & kết quả khắc phục sau xử phạt lao động/BHXH",
    "nameEn": "Remediation dossier after labour/SI sanction",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "MULTI-ST: ST-LABOR-LOCAL; ST-BHXH-LOCAL",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-SOCIAL; LB-DEC-LABOR; LB-CIR-LABOR",
    "note": null,
    "order": 64,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SANC-REMEDY-SEC",
    "nameVi": "Hồ sơ kế hoạch & kết quả khắc phục sau xử phạt chứng khoán",
    "nameEn": "Remediation dossier after securities sanction",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-156; LB-REG-SSC-REP; LB-CIR-SEC-DISC",
    "note": null,
    "order": 65,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-SANC-REMEDY-TAX",
    "nameVi": "Hồ sơ kế hoạch & kết quả khắc phục sau xử phạt thuế",
    "nameEn": "Remediation dossier after tax sanction",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-TAX-LOCAL",
    "lbListSuggested": "LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": null,
    "order": 66,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-UPDATE-HNX-INFO",
    "nameVi": "Hồ sơ cập nhật thông tin gửi HNX",
    "nameEn": "Update filings to HNX",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-HNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-REG-HNX-LIST",
    "note": null,
    "order": 67,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-UPDATE-HOSE-INFO",
    "nameVi": "Hồ sơ cập nhật thông tin gửi HOSE",
    "nameEn": "Update filings to HOSE",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-HOSE",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-REG-HOSE-LIST",
    "note": null,
    "order": 68,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-UPDATE-PAYBANK",
    "nameVi": "Hồ sơ cập nhật thông tin gửi ngân hàng thanh toán",
    "nameEn": "Update filings to payment banks",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-PAYBANK",
    "lbListSuggested": "LB-LAW-SBV; LB-CIR-SBV-PAY; LB-REG-SBV-AML",
    "note": null,
    "order": 69,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-CON",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-UPDATE-SBV-INFO",
    "nameVi": "Hồ sơ cập nhật thông tin gửi NHNN/chi nhánh NHNN",
    "nameEn": "Update filings to SBV / local SBV branch",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "MULTI-ST: ST-SBV; ST-SBV-BRANCH",
    "lbListSuggested": "LB-LAW-SBV; LB-CIR-SBV-PAY; LB-REG-SBV-AML",
    "note": null,
    "order": 70,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-CON",
      "AX-GOV"
    ]
  },
  {
    "type": "DOC",
    "id": "DOC-UPDATE-VSDC-INFO",
    "nameVi": "Hồ sơ cập nhật thông tin gửi VSDC",
    "nameEn": "Update filings to VSDC",
    "axis": "AX-SUP",
    "category": "KEY_DOCUMENT",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DEPOSIT; LB-REG-VSDC-MEM",
    "note": null,
    "order": 71,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-HR-RECRUIT-01",
    "nameVi": "Quy trình tuyển dụng và đào tạo",
    "nameEn": "Recruitment and Training Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-CANDIDATE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-OTHER-PDP",
    "note": null,
    "order": 1,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-HR-ONBOARD-01",
    "nameVi": "Quy trình tiếp nhận nhân viên mới & chuẩn bị phương tiện làm việc",
    "nameEn": "Employee Onboarding and Work Equipment Preparation Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-OTHER-PDP",
    "note": null,
    "order": 2,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-HR-DISC-01",
    "nameVi": "Quy trình xử lý kỷ luật",
    "nameEn": "Disciplinary Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-DEC-LABOR-145",
    "note": null,
    "order": 3,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-HR-PAYROLL-01",
    "nameVi": "Quy trình đánh giá và trả lương",
    "nameEn": "Evaluation and Remuneration Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT; LB-DEC-LABOR-293",
    "note": null,
    "order": 4,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-HR-BENEFIT-01",
    "nameVi": "Quy trình thực hiện chế độ phúc lợi cho nhân viên",
    "nameEn": "Employee Benefits Administration Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT",
    "note": null,
    "order": 5,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-HR-PERF-01",
    "nameVi": "Quy trình quản lý hiệu suất",
    "nameEn": "Performance Management Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR",
    "note": null,
    "order": 6,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-HR-LEAVE-01",
    "nameVi": "Quy trình nghỉ phép",
    "nameEn": "Leave Application Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR",
    "note": null,
    "order": 7,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-HR-CONTRACT-01",
    "nameVi": "Quy trình theo dõi HĐLĐ",
    "nameEn": "Labor Contract Monitoring Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-DEC-LABOR-337",
    "note": null,
    "order": 8,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-HR-BUSINESSTRIP-01",
    "nameVi": "Quy trình / chính sách công tác",
    "nameEn": "Business Trip Administration Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT",
    "note": null,
    "order": 9,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-HR-OFFBOARD-01",
    "nameVi": "Quy trình bàn giao trước khi nghỉ việc",
    "nameEn": "Offboarding and Handover Process",
    "axis": "AX-EMP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-SOCIAL-SI",
    "note": null,
    "order": 10,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-DISC-01",
    "nameVi": "Quy trình công bố thông tin",
    "nameEn": "Information disclosure process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-SSC-REP",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nCBTT overlap AX-GOV vì gắn với minh bạch và quản trị công ty.\n\nQuy trình công bố thông tin là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 11,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-REP-SSC-01",
    "nameVi": "Quy trình báo cáo định kỳ SSC",
    "nameEn": "Periodic reporting to SSC process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-SSC-REP",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nBáo cáo định kỳ gửi SSC overlap AX-GOV vì là reporting/governance.\n\nQuy trình báo cáo định kỳ SSC là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 12,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-REP-EXC-01",
    "nameVi": "Quy trình báo cáo định kỳ HOSE/HNX/VSDC",
    "nameEn": "Periodic reporting to HOSE/HNX/VSDC process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "MULTI-ST: ST-HOSE; ST-HNX; ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-HOSE-LIST; LB-REG-HNX-LIST; LB-REG-VSDC-MEM",
    "note": "Đây là cụm báo cáo gửi riêng cho HOSE/HNX/VSDC; không nên hiểu là một bộ hồ sơ duy nhất ở cấp VNX.\n\nBáo cáo/hồ sơ phát sinh theo từng đầu mối HOSE/HNX/VSDC. Overlap AX-GOV vì bản chất là nghĩa vụ báo cáo/công bố.\n\nQuy trình báo cáo định kỳ HOSE/HNX/VSDC là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 13,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-REP-ADHOC-01",
    "nameVi": "Quy trình báo cáo/giải trình bất thường",
    "nameEn": "Ad-hoc reporting/explanation process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-SSC-REP",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nGiải trình/báo cáo bất thường overlap AX-GOV vì là reporting/governance.\n\nQuy trình báo cáo/giải trình bất thường là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 14,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-FS-01",
    "nameVi": "Quy trình lập/phê duyệt/nộp BCTC năm",
    "nameEn": "Annual FS preparation/approval/submission process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-LAW-TAX; LB-DEC-TAX; LB-CIR-TAX",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nQuy trình BCTC năm gắn cả compliance và governance/disclosure.\n\nQuy trình lập/phê duyệt/nộp BCTC năm là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 15,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-GOV-REP-01",
    "nameVi": "Quy trình lập & công bố Báo cáo quản trị",
    "nameEn": "Corporate governance reporting process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-ENT; LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nBáo cáo quản trị là governance item nhưng vẫn thuộc nghĩa vụ công bố/giám sát.\n\nQuy trình lập & công bố Báo cáo quản trị là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 16,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-AML-KYC-01",
    "nameVi": "Quy trình KYC/KYB",
    "nameEn": "KYC/KYB process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SBV-AML",
    "lbListSuggested": "LB-LAW-AML; LB-DEC-AML; LB-REG-SBV-AML",
    "note": "Có nghĩa vụ thuộc thanh toán/AML do NHNN/FIU giám sát.\n\nAML là chương trình compliance trọng yếu; overlap chính với AX-COM.\n\nQuy trình KYC/KYB là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 17,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ],
    "overlapAxes": [
      "AX-COM"
    ]
  },
  {
    "type": "PR",
    "id": "PR-AML-RISK-01",
    "nameVi": "Quy trình đánh giá rủi ro AML",
    "nameEn": "AML risk assessment process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SBV-AML",
    "lbListSuggested": "LB-LAW-AML; LB-DEC-AML; LB-REG-SBV-AML",
    "note": "Có nghĩa vụ thuộc thanh toán/AML do NHNN/FIU giám sát.\n\nAML là chương trình compliance trọng yếu; overlap chính với AX-COM.\n\nQuy trình đánh giá rủi ro AML là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 18,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ],
    "overlapAxes": [
      "AX-COM"
    ]
  },
  {
    "type": "PR",
    "id": "PR-AML-MON-01",
    "nameVi": "Quy trình giám sát & báo cáo giao dịch AML",
    "nameEn": "AML monitoring & reporting process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SBV-AML",
    "lbListSuggested": "LB-LAW-AML; LB-DEC-AML; LB-REG-SBV-AML; LB-CIR-SBV-PAY",
    "note": "Có nghĩa vụ thuộc thanh toán/AML do NHNN/FIU giám sát.\n\nAML là chương trình compliance trọng yếu; overlap chính với AX-COM.\n\nQuy trình giám sát & báo cáo giao dịch AML là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 19,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ],
    "overlapAxes": [
      "AX-COM"
    ]
  },
  {
    "type": "PR",
    "id": "PR-AML-SANCTION-01",
    "nameVi": "Quy trình rà soát danh sách trừng phạt",
    "nameEn": "Sanctions/blacklist screening process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SBV-AML",
    "lbListSuggested": "LB-LAW-AML; LB-DEC-AML; LB-REG-SBV-AML",
    "note": "Có nghĩa vụ thuộc thanh toán/AML do NHNN/FIU giám sát.\n\nAML là chương trình compliance trọng yếu; overlap chính với AX-COM.\n\nQuy trình rà soát danh sách trừng phạt là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 20,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ],
    "overlapAxes": [
      "AX-COM"
    ]
  },
  {
    "type": "PR",
    "id": "PR-AC-OPEN-01",
    "nameVi": "Quy trình mở tài khoản giao dịch",
    "nameEn": "Securities account opening process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-TRAD; LB-REG-HOSE-LIST; LB-REG-HNX-LIST",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nMở tài khoản giao dịch là service process chịu giám sát.\n\nQuy trình mở tài khoản giao dịch là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 21,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-AC-CHANGE-01",
    "nameVi": "Quy trình thay đổi thông tin khách hàng",
    "nameEn": "Client information change process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-TRAD",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nThay đổi thông tin khách hàng là service process chịu giám sát.\n\nQuy trình thay đổi thông tin khách hàng là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 22,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-AC-CLOSE-01",
    "nameVi": "Quy trình đóng tài khoản giao dịch",
    "nameEn": "Account closing process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-TRAD",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nĐóng tài khoản giao dịch là service process chịu giám sát.\n\nQuy trình đóng tài khoản giao dịch là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 23,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-AC-FREEZE-01",
    "nameVi": "Quy trình phong tỏa/giải tỏa theo yêu cầu cơ quan nhà nước",
    "nameEn": "Freeze/unfreeze upon authority request process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-DEC-SEC-156",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nTuân thủ nội bộ để đáp ứng yêu cầu giám sát/quy định. Quy trình vận hành nghiệp vụ/dịch vụ cho khách hàng.\n\nQuy trình phong tỏa/giải tỏa theo yêu cầu cơ quan nhà nước là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 24,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-TRADING-ERROR-01",
    "nameVi": "Quy trình xử lý lỗi giao dịch",
    "nameEn": "Trade error handling process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-TRAD; LB-REG-HOSE-LIST; LB-REG-HNX-LIST",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nTuân thủ nội bộ để đáp ứng yêu cầu giám sát/quy định. Quy trình vận hành nghiệp vụ/dịch vụ cho khách hàng.\n\nQuy trình xử lý lỗi giao dịch là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 25,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-DEP-OPEN-01",
    "nameVi": "Quy trình mở tài khoản lưu ký tại VSDC",
    "nameEn": "VSDC depository account opening process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DEPOSIT; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nMở tài khoản lưu ký là service process chịu giám sát.\n\nQuy trình mở tài khoản lưu ký tại VSDC là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 26,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-DEP-IN-01",
    "nameVi": "Quy trình nộp chứng khoán",
    "nameEn": "Securities deposit-in process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DEPOSIT; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nNộp chứng khoán là service process chịu giám sát.\n\nQuy trình nộp chứng khoán là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 27,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-DEP-OUT-01",
    "nameVi": "Quy trình rút chứng khoán",
    "nameEn": "Securities withdrawal process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DEPOSIT; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nRút chứng khoán là service process chịu giám sát.\n\nQuy trình rút chứng khoán là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 28,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-DEP-TRANSFER-01",
    "nameVi": "Quy trình chuyển khoản chứng khoán",
    "nameEn": "Securities transfer process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DEPOSIT; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nChuyển khoản chứng khoán là service process chịu giám sát.\n\nQuy trình chuyển khoản chứng khoán là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 29,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-DEP-SETTLE-01",
    "nameVi": "Quy trình thanh toán tiền–chứng khoán",
    "nameEn": "Cash-securities settlement process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DEPOSIT; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nThanh toán tiền-chứng khoán là service process chịu giám sát.\n\nQuy trình thanh toán tiền–chứng khoán là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 30,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-DER-AC-01",
    "nameVi": "Quy trình mở tài khoản & giao dịch CK phái sinh",
    "nameEn": "Derivatives account opening & trading process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-TRAD",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nPhái sinh là quy trình vận hành dịch vụ chịu giám sát.\n\nQuy trình mở tài khoản & giao dịch CK phái sinh là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 31,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-DER-SETTLE-01",
    "nameVi": "Quy trình bù trừ/thanh toán phái sinh",
    "nameEn": "Derivatives clearing & settlement process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DEPOSIT; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nBù trừ/thanh toán phái sinh là service process chịu giám sát.\n\nQuy trình bù trừ/thanh toán phái sinh là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 32,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-BOND-GOV-01",
    "nameVi": "Quy trình giao dịch TPCP",
    "nameEn": "Government bond trading process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-HNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-TRAD",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nVận hành TPCP là service process chịu quy chế giám sát.\n\nQuy trình giao dịch TPCP là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 33,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-BOND-CORP-01",
    "nameVi": "Quy trình giao dịch TPDN niêm yết/ĐKGD",
    "nameEn": "Listed/registered corporate bond trading process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-DEC-BOND; LB-CIR-SEC-TRAD",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nVận hành TPDN niêm yết/ĐKGD là service process chịu quy chế giám sát.\n\nQuy trình giao dịch TPDN niêm yết/ĐKGD là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 34,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-TRADING-NEWBIZ-01",
    "nameVi": "Quy trình vận hành sản phẩm/dịch vụ mới",
    "nameEn": "New product/service operations process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-FIRM; LB-CIR-SEC-TRAD; LB-REG-HOSE-LIST; LB-REG-HNX-LIST; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nQuy trình vận hành sản phẩm mới gắn service operation và supervisory readiness.\n\nQuy trình vận hành sản phẩm/dịch vụ mới là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 35,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-IT-ACCESS-TRAD-01",
    "nameVi": "Quy trình quyền truy cập hệ thống giao dịch (nộp HOSE/HNX/VSDC – không gộp)",
    "nameEn": "Trading system access management process (submitted separately)",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-REG-HOSE-LIST; LB-REG-HNX-LIST; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nQuy trình quyền truy cập hệ thống giao dịch gắn service operation và supervisory requirement.\n\nQuy trình quyền truy cập hệ thống giao dịch (nộp HOSE/HNX/VSDC – không gộp) là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 36,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-IT-CHANGE-01",
    "nameVi": "Quy trình quản trị thay đổi hệ thống giao dịch",
    "nameEn": "Trading system change management process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-REG-HOSE-LIST; LB-REG-HNX-LIST; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nThay đổi hệ thống giao dịch gắn service operation và supervisory requirement.\n\nQuy trình quản trị thay đổi hệ thống giao dịch là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 37,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-IT-INCIDENT-01",
    "nameVi": "Quy trình xử lý sự cố CNTT ảnh hưởng giao dịch & báo cáo cơ quan quản lý",
    "nameEn": "IT incident handling & regulator notification process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-VNX",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-REG-HOSE-LIST; LB-REG-HNX-LIST; LB-REG-VSDC-MEM",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nSự cố CNTT ảnh hưởng giao dịch gắn service operation và supervisory reporting.\n\nQuy trình xử lý sự cố CNTT ảnh hưởng giao dịch & báo cáo cơ quan quản lý là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 38,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-INSP-COORD-01",
    "nameVi": "Quy trình phối hợp làm việc với đoàn thanh tra, kiểm tra",
    "nameEn": "Inspection coordination process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "MULTI-ST: ST-SSC; ST-TAX-LOCAL; ST-BHXH-LOCAL; ST-GOVINSPECT",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-156; LB-REG-SSC-REP",
    "note": "Không chỉ phát sinh trong lĩnh vực chứng khoán; logic tương tự có thể phát sinh từ cơ quan Thuế, BHXH hoặc cơ quan thanh tra khác.\n\nNên dùng logic đa cơ quan. Nếu có yêu cầu cung cấp hồ sơ từ cơ quan công an hoặc cơ quan khác thì xử lý theo cùng khung phối hợp/khắc phục.\n\nQuy trình phối hợp làm việc với đoàn thanh tra, kiểm tra là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 39,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-SANC-REMEDY-01",
    "nameVi": "Quy trình lập kế hoạch & thực hiện khắc phục sau xử phạt",
    "nameEn": "Post-sanction remediation process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "MULTI-ST: ST-SSC; ST-TAX-LOCAL; ST-BHXH-LOCAL; ST-GOVINSPECT",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-156; LB-REG-SSC-REP; LB-CIR-SEC-DISC",
    "note": "Không chỉ phát sinh trong lĩnh vực chứng khoán; logic tương tự có thể phát sinh từ cơ quan Thuế, BHXH hoặc cơ quan thanh tra khác.\n\nNên dùng logic đa cơ quan. Nếu có yêu cầu cung cấp hồ sơ từ cơ quan công an hoặc cơ quan khác thì xử lý theo cùng khung phối hợp/khắc phục.\n\nQuy trình lập kế hoạch & thực hiện khắc phục sau xử phạt là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 40,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-ENT-CHANGE-01",
    "nameVi": "Quy trình đăng ký thay đổi GCN ĐKDN",
    "nameEn": "Enterprise registration change process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-DOF-PROV",
    "lbListSuggested": "LB-LAW-ENT",
    "note": "Có nghĩa vụ đăng ký doanh nghiệp/đăng ký thay đổi với cơ quan ĐKKD.\n\nTuân thủ nội bộ để đáp ứng yêu cầu giám sát/quy định.\n\nQuy trình đăng ký thay đổi GCN ĐKDN là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 41,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ],
    "overlapAxes": []
  },
  {
    "type": "PR",
    "id": "PR-SEC-CHANGE-01",
    "nameVi": "Quy trình làm việc với SSC khi thay đổi thông tin giấy phép CTCK",
    "nameEn": "Process to work with SSC on securities license changes",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155",
    "note": "Có nghĩa vụ chịu giám sát/quy chế trong lĩnh vực chứng khoán (SSC/Sở/VSDC).\n\nQuy trình cập nhật giấy phép CTCK gắn với quản trị thay đổi thông tin pháp lý.\n\nQuy trình làm việc với SSC khi thay đổi thông tin giấy phép CTCK là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 42,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-GOV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-RISK-NEWBIZ-01",
    "nameVi": "Quy trình phê duyệt & đánh giá rủi ro sản phẩm/dịch vụ mới",
    "nameEn": "New product/service approval & risk assessment process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-FIRM",
    "note": "Quy trình phê duyệt & đánh giá rủi ro sản phẩm mới là cơ chế nội bộ của PHS; trục chính là governance/compliance/service design.\n\nInternal approval/risk framework -> AX-GOV + AX-COM + AX-SRV; chỉ cross-reference sang AX-SUP.\n\nQuy trình phê duyệt & đánh giá rủi ro sản phẩm/dịch vụ mới là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 43,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "type": "PR",
    "id": "PR-IT-ACCESS-GEN-01",
    "nameVi": "Quy trình quản lý quyền truy cập CNTT (chung)",
    "nameEn": "General IT access management process",
    "axis": "AX-SUP",
    "category": "PROCESS",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155",
    "note": "Quy trình quyền truy cập CNTT (chung) thiên về kiểm soát nội bộ/governance; chỉ nên nối sang AX-SUP khi có yêu cầu quy định làm nền.\n\nKhác với PR-IT-ACCESS-TRAD-01, đây là quy trình CNTT chung nên trục chính là governance/compliance.\n\nQuy trình quản lý quyền truy cập CNTT (chung) là quy trình nội bộ phục vụ nghĩa vụ tuân thủ, báo cáo hoặc phối hợp với cơ quan/bên giám sát.",
    "order": 44,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "EV",
    "id": "EV-EMP-RECRUIT",
    "nameVi": "Tuyển dụng / tiếp nhận ứng viên",
    "nameEn": "Recruitment / candidate intake",
    "axis": "AX-EMP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-CANDIDATE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-OTHER-PDP",
    "note": "Giữ mã EV-EMP tạm thời vì legend table hiện chưa có theme riêng cho vòng đời nhân sự.",
    "order": 1,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "EV",
    "id": "EV-EMP-ONBOARD",
    "nameVi": "Tiếp nhận nhân viên mới",
    "nameEn": "Employee onboarding",
    "axis": "AX-EMP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-OTHER-PDP; LB-LAW-SOCIAL-SI",
    "note": "Giữ mã EV-EMP tạm thời vì legend table hiện chưa có theme riêng cho vòng đời nhân sự.",
    "order": 2,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "EV",
    "id": "EV-EMP-PAYROLL",
    "nameVi": "Chi trả lương, thưởng và phúc lợi",
    "nameEn": "Payroll, bonus and benefits",
    "axis": "AX-EMP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT; LB-LAW-SOCIAL-SI; LB-DEC-LABOR-293",
    "note": "Giữ mã EV-EMP tạm thời vì legend table hiện chưa có theme riêng cho vòng đời nhân sự.",
    "order": 3,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "EV",
    "id": "EV-EMP-LEAVE",
    "nameVi": "Nghỉ phép / công tác",
    "nameEn": "Leave / business trip",
    "axis": "AX-EMP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-TAX-PIT",
    "note": "Giữ mã EV-EMP tạm thời vì legend table hiện chưa có theme riêng cho vòng đời nhân sự.",
    "order": 4,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "EV",
    "id": "EV-EMP-DISC",
    "nameVi": "Xử lý kỷ luật lao động",
    "nameEn": "Employee discipline",
    "axis": "AX-EMP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-DEC-LABOR-145; LB-LAW-SEC",
    "note": "Giữ mã EV-EMP tạm thời vì legend table hiện chưa có theme riêng cho vòng đời nhân sự.",
    "order": 5,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "EV",
    "id": "EV-EMP-TERM",
    "nameVi": "Chấm dứt HĐLĐ / nghỉ việc",
    "nameEn": "Termination / employee exit",
    "axis": "AX-EMP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-EMPLOYEE",
    "lbListSuggested": "LB-LAW-LABOR; LB-LAW-SOCIAL-SI; LB-LAW-TAX-PIT",
    "note": "Giữ mã EV-EMP tạm thời vì legend table hiện chưa có theme riêng cho vòng đời nhân sự.",
    "order": 6,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "EV",
    "id": "EV-EMP-LICENSE",
    "nameVi": "Biến động nhân sự hành nghề chứng khoán",
    "nameEn": "Licensed securities staff change",
    "axis": "AX-EMP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-SSC",
    "lbListSuggested": "LB-LAW-SEC; LB-CIR-SEC-PRACT; LB-LAW-LABOR",
    "note": "Giữ mã EV-EMP tạm thời vì legend table hiện chưa có theme riêng cho vòng đời nhân sự.",
    "order": 7,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ],
    "overlapAxes": []
  },
  {
    "type": "EV",
    "id": "EV-SANC",
    "nameVi": "Bị xử phạt / kết luận thanh tra, kiểm tra",
    "nameEn": "Administrative sanctions / inspection conclusion",
    "axis": "AX-SUP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-SSC; ST-HOSE; ST-HNX; ST-VSDC; ST-TAX-LOCAL; ST-BHXH-LOCAL; ST-GOVINSPECT; ST-STATEAUDIT",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-156; LB-REG-SSC-REP; LB-CIR-SEC-DISC",
    "note": "Sự kiện kích hoạt DOC/PR\n\nKích hoạt khi: Khi có quyết định thanh tra, kiểm tra hoặc quyết định xử phạt và yêu cầu khắc phục.\n\nSự kiện thanh tra/xử phạt có thể phát sinh từ chứng khoán, thuế, BHXH hoặc cơ quan thanh tra khác; nếu cơ quan công an yêu cầu cung cấp hồ sơ thì dùng cùng khung phối hợp.\n\nSự kiện kích hoạt DOC/PR\n\nBị xử phạt / kết luận thanh tra, kiểm tra là sự kiện vận hành có thể kích hoạt nghĩa vụ báo cáo, cập nhật hồ sơ hoặc xử lý tuân thủ.",
    "order": 8,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "EV",
    "id": "EV-BIZ-ADD",
    "nameVi": "Bổ sung / thay đổi nghiệp vụ chứng khoán",
    "nameEn": "Add/change securities business lines",
    "axis": "AX-SUP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-SSC; ST-HOSE; ST-HNX; ST-VSDC",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-FIRM; LB-CIR-SEC-DISC; LB-REG-SSC-REP",
    "note": "Sự kiện kích hoạt DOC/PR\n\nKích hoạt khi: Khi xin cấp mới hoặc điều chỉnh nghiệp vụ chứng khoán của CTCK.\n\nSản phẩm/ nghiệp vụ mới → vận hành dịch vụ + tuân thủ/kiểm soát rủi ro.\n\nSự kiện kích hoạt DOC/PR\n\nBổ sung / thay đổi nghiệp vụ chứng khoán là sự kiện vận hành có thể kích hoạt nghĩa vụ báo cáo, cập nhật hồ sơ hoặc xử lý tuân thủ.",
    "order": 9,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "type": "EV",
    "id": "EV-PROD-NEW",
    "nameVi": "Triển khai sản phẩm / dịch vụ đầu tư mới (trong phạm vi đã được cấp phép)",
    "nameEn": "Launch a new investment product/service (within licensed scope)",
    "axis": "AX-SUP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-SSC; ST-HOSE; ST-HNX; ST-VSDC; ST-SBV-AML",
    "lbListSuggested": "LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-FIRM; LB-CIR-SEC-DISC; LB-REG-HOSE-LIST; LB-REG-HNX-LIST; LB-REG-VSDC-MEM; LB-REG-SBV-AML",
    "note": "Sự kiện kích hoạt DOC/PR\n\nKích hoạt khi: Khi triển khai sản phẩm/dịch vụ mới nhưng vẫn nằm trong phạm vi nghiệp vụ đã được cấp phép.\n\nPhân biệt rõ: hồ sơ nội bộ phê duyệt sản phẩm và T&Cs khách hàng không phải supervisory routine item; chỉ cross-reference sang AX-SUP khi cần đối chiếu với filing/regulatory requirement.\n\nSự kiện kích hoạt DOC/PR\n\nTriển khai sản phẩm / dịch vụ đầu tư mới (trong phạm vi đã được cấp phép) là sự kiện vận hành có thể kích hoạt nghĩa vụ báo cáo, cập nhật hồ sơ hoặc xử lý tuân thủ.",
    "order": 10,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "type": "EV",
    "id": "EV-CAP-INC",
    "nameVi": "Tăng vốn điều lệ",
    "nameEn": "Increase charter capital",
    "axis": "AX-SUP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-DOF-PROV; ST-SSC; ST-HOSE; ST-HNX; ST-TAX-LOCAL",
    "lbListSuggested": "LB-LAW-ENT; LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-SSC-REP; LB-DEC-TAX",
    "note": "Sự kiện kích hoạt DOC/PR\n\nKích hoạt khi: Khi công ty thực hiện thủ tục tăng vốn điều lệ và/hoặc phát hành để tăng vốn.\n\nThay đổi thông tin công ty → quản trị/công bố thông tin + tuân thủ.\n\nSự kiện kích hoạt DOC/PR\n\nTăng vốn điều lệ là sự kiện vận hành có thể kích hoạt nghĩa vụ báo cáo, cập nhật hồ sơ hoặc xử lý tuân thủ.",
    "order": 11,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "type": "EV",
    "id": "EV-HQ-CHANGE",
    "nameVi": "Thay đổi trụ sở chính",
    "nameEn": "Change head office address",
    "axis": "AX-SUP",
    "category": "EVENT",
    "stPrimarySuggested": "ST-DOF-PROV; ST-SSC; ST-HOSE; ST-HNX; ST-TAX-LOCAL; ST-SBV-BRANCH",
    "lbListSuggested": "LB-LAW-ENT; LB-LAW-SEC; LB-DEC-SEC-155; LB-CIR-SEC-DISC; LB-REG-SSC-REP",
    "note": "Sự kiện kích hoạt DOC/PR\n\nKích hoạt khi: Khi thay đổi địa chỉ trụ sở chính của công ty.\n\nThay đổi thông tin công ty → quản trị/công bố thông tin + tuân thủ.\n\nSự kiện kích hoạt DOC/PR\n\nThay đổi trụ sở chính là sự kiện vận hành có thể kích hoạt nghĩa vụ báo cáo, cập nhật hồ sơ hoặc xử lý tuân thủ.",
    "order": 12,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ],
    "overlapAxes": [
      "AX-COM",
      "AX-GOV"
    ]
  }
];

export const RAW_EDGES = [
  {
    "source": "EV-EMP-DISC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-CODE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 1,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-DISC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-LABOR-CLA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 2,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-DISC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-LABOR-ILR",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 3,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-DISC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-DISC-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 4,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-LEAVE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-TRAVEL",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 5,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-LEAVE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-BUSINESSTRIP-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 6,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-LEAVE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-LEAVE-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 7,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-LICENSE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-CODE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 8,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-LICENSE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-LC",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 9,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-LICENSE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SEC-PRACT",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 10,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-LICENSE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-ONBOARD-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 11,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-LICENSE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-RECRUIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 12,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-ONBOARD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-BHXH-REGISTER",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 13,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-ONBOARD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-LC",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 14,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-ONBOARD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-MGMTREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 15,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-ONBOARD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-NDA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 16,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-ONBOARD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-CONTRACT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 17,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-ONBOARD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-ONBOARD-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 18,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-PAYROLL",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-BHXH-REGISTER",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 19,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-PAYROLL",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-ALLOW",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 20,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-PAYROLL",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-BENEFITREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 21,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-PAYROLL",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-SALARYREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 22,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-PAYROLL",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-SALARYSCALE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 23,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-PAYROLL",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-WELFARE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 24,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-PAYROLL",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-BENEFIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 25,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-PAYROLL",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-PAYROLL-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 26,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-RECRUIT",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-INTERN",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 27,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-RECRUIT",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-JD",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 28,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-RECRUIT",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-NDA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 29,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-RECRUIT",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-RECRUIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 30,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-TERM",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-BHXH-REGISTER",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 31,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-TERM",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-LC",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 32,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-TERM",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-HR-TRAVEL",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 33,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-TERM",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-CONTRACT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 34,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-TERM",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-OFFBOARD-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 35,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "EV-EMP-TERM",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-HR-PAYROLL-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Sự kiện nhân sự kéo theo việc rà soát / cập nhật tài liệu hoặc quy trình liên quan.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 36,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-CIR-SEC-PRACT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-CODE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 37,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-CIR-SEC-PRACT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-PRACT",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 38,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-LABOR-145",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-LABOR-CLA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 39,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-LABOR-145",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-LABOR-ILR",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 40,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-LABOR-145",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-DISC-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 41,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-LABOR-293",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-SALARYREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 42,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-LABOR-293",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-SALARYSCALE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 43,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-LABOR-293",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-PAYROLL-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 44,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-LABOR-337",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-LC",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 45,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-LABOR-337",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-CONTRACT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 46,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-OTHER-356",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-NDA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 47,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-DEC-OTHER-356",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-PDPNOTICE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Văn bản hướng dẫn chi tiết nghĩa vụ thông báo và triển khai tuân thủ dữ liệu cá nhân.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 48,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-ALLOW",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 49,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-BENEFITREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 50,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-CODE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 51,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-ENGAGE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 52,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-INTERN",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 53,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-JD",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 54,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-LC",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 55,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-MGMTREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 56,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-NDA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 57,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-SALARYREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 58,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-SALARYSCALE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 59,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-TRAVEL",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 60,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-WELFARE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 61,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-LABOR-CLA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 62,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-LABOR-ILR",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 63,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-BENEFIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 64,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-BUSINESSTRIP-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 65,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-CONTRACT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 66,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-DISC-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 67,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-LEAVE-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 68,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-OFFBOARD-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 69,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-ONBOARD-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 70,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-PAYROLL-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 71,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-PERF-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 72,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-RECRUIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 73,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-OTHER-PDP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-INTERN",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 74,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-OTHER-PDP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-NDA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 75,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-OTHER-PDP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-PDPNOTICE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý chính cho nghĩa vụ thông báo và xử lý dữ liệu cá nhân trong hồ sơ nhân sự.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 76,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-OTHER-PDP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-ONBOARD-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 77,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-OTHER-PDP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-RECRUIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 78,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-CODE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 79,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-PRACT",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 80,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL-HI",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-BHXH-REGISTER",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 81,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL-SI",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-BHXH-REGISTER",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 82,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL-SI",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-OFFBOARD-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 83,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-TAX-PIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-ALLOW",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 84,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-TAX-PIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-BENEFITREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 85,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-TAX-PIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-ENGAGE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 86,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-TAX-PIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-SALARYREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 87,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-TAX-PIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-TRAVEL",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 88,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-TAX-PIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-HR-WELFARE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 89,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-TAX-PIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-BENEFIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 90,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-TAX-PIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-BUSINESSTRIP-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 91,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "LB-LAW-TAX-PIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-HR-PAYROLL-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Căn cứ pháp lý neo cho tài liệu / quy trình thuộc AX-EMP.",
    "confidence": "HIGH",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 92,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-SOCIAL-HI",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Khung pháp lý chính về BHYT.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 93,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-SOCIAL-SI",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Khung pháp lý chính về BHXH bắt buộc.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 94,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-BHXH-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Hồ sơ nộp / duy trì với cơ quan BHXH.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý). Liên quan DOC-BHXH-REGISTER: Bổ sung note về khả năng phát sinh survey/thống kê lao động riêng.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "HIGH",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 95,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-CANDIDATE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-JD",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 96,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-CANDIDATE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-RECRUIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 97,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-ALLOW",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 98,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-BENEFITREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 99,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-CODE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 100,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-ENGAGE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 101,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-LC",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 102,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-CON"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-MGMTREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 103,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-NDA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 104,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-CON"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-PDPNOTICE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Thông báo bảo vệ dữ liệu áp dụng cho người lao động khi PHS xử lý dữ liệu cá nhân trong quan hệ lao động.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 105,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-CON"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-SALARYREG",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 106,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-SALARYSCALE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 107,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-TRAVEL",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 108,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-WELFARE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 109,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-GOV",
      "AX-COM"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-LABOR-CLA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Thỏa ước lao động tập thể tác động trực tiếp đến quyền, nghĩa vụ và điều kiện lao động của người lao động.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 110,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-SEC-PRACT",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Người lao động có thể đồng thời là nhân sự hành nghề chứng khoán; cần nhìn thấy liên hệ này trong map AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 111,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-CIR-SEC-PRACT",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Văn bản chuyên ngành liên quan nhân sự hành nghề chứng khoán.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 112,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-LABOR-145",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Nghị định hướng dẫn Bộ luật Lao động, áp dụng trực tiếp cho nhiều quy trình nhân sự nội bộ.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 113,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-LABOR-293",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Khung pháp lý về mức lương tối thiểu liên quan trực tiếp tới chế độ lương của người lao động.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 114,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-LABOR-337",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Nghị định về hợp đồng lao động điện tử gắn trực tiếp với hồ sơ người lao động.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 115,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-OTHER-356",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Văn bản hướng dẫn chi tiết triển khai nghĩa vụ bảo vệ dữ liệu cá nhân trong hồ sơ nhân sự.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 116,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-LABOR",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Người lao động là chủ thể trung tâm của quan hệ lao động; cần hiển thị trực tiếp căn cứ pháp lý nền tảng khi chọn node này.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 117,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-OTHER-PDP",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Khung pháp lý về xử lý dữ liệu cá nhân áp dụng trực tiếp với hồ sơ người lao động.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 118,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-SEC",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Áp dụng cho nhóm nhân sự hành nghề và chuẩn mực tuân thủ trong công ty chứng khoán.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 119,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-SOCIAL-SI",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Khung pháp lý về BHXH gắn trực tiếp với người lao động trong AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 120,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-TAX-PIT",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Khung pháp lý PIT phát sinh trực tiếp từ tiền lương, phụ cấp và phúc lợi của người lao động.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 121,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-BENEFIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 122,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-BUSINESSTRIP-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 123,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-CONTRACT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 124,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-DISC-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 125,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-LEAVE-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 126,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-OFFBOARD-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 127,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-ONBOARD-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SRV; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 128,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SRV",
      "AX-COM"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-PAYROLL-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 129,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-PERF-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 130,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-EMPLOYEE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "PR-HR-RECRUIT-01",
    "targetType": "PR",
    "axis": "AX-EMP",
    "note": "Người lao động hiện hữu có thể là đối tượng nội bộ liên quan trong quy trình tuyển dụng và đào tạo; team yêu cầu hiển thị liên kết này trong navigator.",
    "confidence": "LOW",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 131,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-INTERN",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-INTERN",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 132,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-CON"
    ]
  },
  {
    "source": "ST-INTERN",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-HR-PDPNOTICE",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Thông báo bảo vệ dữ liệu cũng áp dụng cho thực tập sinh khi thu thập và xử lý dữ liệu cá nhân.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 133,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-CON"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-LABOR-145",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Khung hướng dẫn chi tiết về điều kiện lao động và quan hệ lao động.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 134,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-LABOR",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Cơ quan lao động là đầu mối kiểm tra/giải trình đối với một số nghĩa vụ lao động.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 135,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-LABOR-CLA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Áp dụng khi thỏa ước lao động tập thể thuộc diện gửi/đăng ký/xuất trình cho cơ quan lao động.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 136,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-LABOR-ILR",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Có nghĩa vụ đối ngoại / sẵn sàng xuất trình cho cơ quan lao động.",
    "confidence": "HIGH",
    "otherAxes": "AX-SUP; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 137,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-CIR-SEC-PRACT",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Văn bản chuyên ngành cho hồ sơ hành nghề.",
    "confidence": "HIGH",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 138,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-SEC",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Khung pháp lý về điều kiện hành nghề chứng khoán.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 139,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SEC-PRACT",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Phạm vi hẹp: chỉ hồ sơ hành nghề chứng khoán.",
    "confidence": "HIGH",
    "otherAxes": "AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 140,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-TAX-PIT",
    "targetType": "LB",
    "axis": "AX-EMP",
    "note": "Cơ quan thuế là đầu mối quản lý nghĩa vụ PIT phát sinh từ tiền lương, phụ cấp và phúc lợi.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SUP",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 141,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-COM",
      "AX-SUP"
    ]
  },
  {
    "source": "ST-UNION",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "DOC-LABOR-CLA",
    "targetType": "DOC",
    "axis": "AX-EMP",
    "note": "Đầu mối quan hệ chính của hồ sơ / quy trình AX-EMP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-SUP; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 142,
    "primaryAxis": "AX-EMP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-BIZ-ADD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-ART-01",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.\n\nLiên quan DOC-ART-01: Đổi logic sang AX-GOV; giữ như supporting internal doc cho event thay đổi, không coi là supervisory routine item.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 143,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-BIZ-ADD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SEC-LIC-BIZ",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 144,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-BIZ-ADD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-AML-RISK-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 145,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-BIZ-ADD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 146,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-BIZ-ADD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-IT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 147,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-BIZ-ADD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-RISK-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 148,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-BIZ-ADD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 149,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-ART-01",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.\n\nLiên quan DOC-ART-01: Đổi logic sang AX-GOV; giữ như supporting internal doc cho event thay đổi, không coi là supervisory routine item.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 150,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-ENT-ERC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 151,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SEC-LIC-CAP",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 152,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 153,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-ENT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 154,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-GOV-REP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 155,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-REP-SSC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 156,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-SEC-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 157,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-ART-01",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.\n\nLiên quan DOC-ART-01: Đổi logic sang AX-GOV; giữ như supporting internal doc cho event thay đổi, không coi là supervisory routine item.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 158,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-ENT-ERC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 159,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SEC-LIC-HQ",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 160,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 161,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-ENT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 162,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-IT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 163,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-REP-SSC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 164,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-SEC-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 165,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-TBD-CLIENT-TC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 166,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-TBD-PROD-APPROVAL",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.\n\nLiên quan DOC-TBD-PROD-APPROVAL: Đổi thành internal approval doc; xếp chính ở AX-GOV/AX-SRV, chỉ cross-reference sang AX-SUP.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 167,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-TBD-REG-REG",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.\n\nSự kiện kích hoạt lập/cập nhật hồ sơ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 168,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-AML-RISK-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 169,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 170,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-IT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 171,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-RISK-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 172,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 173,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 174,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-INSP-COORD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 175,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "PR-SANC-REMEDY-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt quy trình liên quan.\n\nSự kiện kích hoạt/đòi hỏi kích hoạt quy trình nội bộ.",
    "confidence": "HIGH",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 176,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-LABOR-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-LABOR-REPORT: Đổi trục chính sang AX-EMP; vẫn cross-reference AX-SUP.\n\nCăn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 177,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "LB-CIR-SBV-PAY",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-AML-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 178,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SBV-PAY",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-MON-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 179,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DEPOSIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-VSDC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 180,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DEPOSIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-IN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 181,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DEPOSIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 182,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DEPOSIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-OUT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 183,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DEPOSIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 184,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DEPOSIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-TRANSFER-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 185,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DEPOSIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DER-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 186,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-SSC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 187,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 188,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-GOV-REP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 189,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-ADHOC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 190,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-EXC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 191,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-SSC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 192,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-SANC-REMEDY-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 193,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-FIRM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-BIZ",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 194,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-FIRM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-MAN",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-SEC-LIC-MAN: Giữ phần regulatory ở AX-SUP; ghi rõ tài liệu nhân sự nội bộ tách sang AX-GOV.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 195,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-FIRM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TBD-CLIENT-TC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 196,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-FIRM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TBD-PROD-APPROVAL",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-TBD-PROD-APPROVAL: Đổi thành internal approval doc; xếp chính ở AX-GOV/AX-SRV, chỉ cross-reference sang AX-SUP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 197,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-FIRM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-RISK-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 198,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-FIRM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 199,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-HNX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-MEM-HNX: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HNX.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 200,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-HOSE",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-MEM-HOSE: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HOSE.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 201,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 202,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-CLOSE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 203,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 204,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-BOND-CORP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 205,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-BOND-GOV-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 206,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DER-AC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 207,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-ERROR-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 208,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SEC-TRAD",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 209,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-FS-AUDIT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 210,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TAX-DECL",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-TAX-DECL: Đổi mô tả sang nghĩa vụ thuế định kỳ (kê khai/quyết toán/báo cáo).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 211,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TAX-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 212,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-FS-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 213,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-AML-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 214,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-AML-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 215,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-KYC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 216,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-MON-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 217,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-RISK-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 218,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-SANCTION-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 219,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-BOND",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-BOND-CORP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 220,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-BHXH-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-BHXH-REGISTER: Bổ sung note về khả năng phát sinh survey/thống kê lao động riêng.\n\nCăn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 221,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "LB-DEC-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-BHXH-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo (gợi ý).\n\nCăn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 222,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "LB-DEC-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-LABOR-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-LABOR-REPORT: Đổi trục chính sang AX-EMP; vẫn cross-reference AX-SUP.\n\nCăn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 223,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-FS-AUDIT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 224,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-HNX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-MEM-HNX: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HNX.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 225,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-HOSE",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-MEM-HOSE: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HOSE.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 226,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-VSDC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 227,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-SSC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 228,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-BIZ",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 229,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-CAP",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 230,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-HQ",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 231,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-MAIN",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 232,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-MAN",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-SEC-LIC-MAN: Giữ phần regulatory ở AX-SUP; ghi rõ tài liệu nhân sự nội bộ tách sang AX-GOV.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 233,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TBD-CLIENT-TC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 234,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TBD-PROD-APPROVAL",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-TBD-PROD-APPROVAL: Đổi thành internal approval doc; xếp chính ở AX-GOV/AX-SRV, chỉ cross-reference sang AX-SUP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 235,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TBD-REG-REG",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 236,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 237,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-CLOSE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 238,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-FREEZE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 239,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 240,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-BOND-CORP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 241,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-BOND-GOV-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 242,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-IN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 243,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 244,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-OUT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 245,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 246,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-TRANSFER-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 247,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DER-AC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 248,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DER-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 249,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 250,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-FS-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 251,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-GOV-REP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 252,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-ACCESS-GEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 253,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-ACCESS-TRAD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 254,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 255,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-INCIDENT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 256,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-ADHOC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 257,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-EXC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 258,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-SSC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 259,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-RISK-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 260,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-SEC-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 261,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-ERROR-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 262,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 263,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-156",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-FREEZE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 264,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-DEC-SEC-156",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-INSP-COORD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 265,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-156",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-SANC-REMEDY-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 266,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-FS-AUDIT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 267,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TAX-DECL",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-TAX-DECL: Đổi mô tả sang nghĩa vụ thuế định kỳ (kê khai/quyết toán/báo cáo).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 268,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TAX-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 269,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-FS-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 270,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-AML-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 271,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-AML-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 272,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-KYC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 273,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-MON-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 274,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-RISK-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 275,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-SANCTION-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 276,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-ENT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-ART-01",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-ART-01: Đổi logic sang AX-GOV; giữ như supporting internal doc cho event thay đổi, không coi là supervisory routine item.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 277,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-ENT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-ENT-ERC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 278,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-ENT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-ENT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 279,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "LB-LAW-ENT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-GOV-REP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 280,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-LABOR-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-LABOR-REPORT: Đổi trục chính sang AX-EMP; vẫn cross-reference AX-SUP.\n\nCăn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 281,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-ART-01",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-ART-01: Đổi logic sang AX-GOV; giữ như supporting internal doc cho event thay đổi, không coi là supervisory routine item.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 282,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-FS-AUDIT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 283,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-HNX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-MEM-HNX: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HNX.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 284,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-HOSE",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-MEM-HOSE: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HOSE.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 285,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-VSDC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 286,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-SSC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 287,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-BIZ",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 288,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-CAP",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 289,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-HQ",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 290,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-MAIN",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 291,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SEC-LIC-MAN",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-SEC-LIC-MAN: Giữ phần regulatory ở AX-SUP; ghi rõ tài liệu nhân sự nội bộ tách sang AX-GOV.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 292,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TBD-CLIENT-TC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 293,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TBD-PROD-APPROVAL",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-TBD-PROD-APPROVAL: Đổi thành internal approval doc; xếp chính ở AX-GOV/AX-SRV, chỉ cross-reference sang AX-SUP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 294,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TBD-REG-REG",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 295,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 296,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-CLOSE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 297,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-FREEZE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 298,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 299,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-BOND-CORP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 300,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-BOND-GOV-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 301,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-IN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 302,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 303,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-OUT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 304,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 305,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-TRANSFER-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 306,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DER-AC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 307,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DER-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 308,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 309,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-FS-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 310,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-GOV-REP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 311,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-INSP-COORD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 312,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-ACCESS-GEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 313,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-ACCESS-TRAD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 314,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 315,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-INCIDENT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 316,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-ADHOC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 317,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-EXC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 318,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-SSC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 319,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-RISK-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 320,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-SANC-REMEDY-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 321,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-SEC-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 322,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-ERROR-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 323,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 324,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-BHXH-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-BHXH-REGISTER: Bổ sung note về khả năng phát sinh survey/thống kê lao động riêng.\n\nCăn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 325,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-BHXH-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo (gợi ý).\n\nCăn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 326,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-FS-AUDIT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 327,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TAX-DECL",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-TAX-DECL: Đổi mô tả sang nghĩa vụ thuế định kỳ (kê khai/quyết toán/báo cáo).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 328,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-TAX-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 329,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-FS-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 330,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-HNX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-MEM-HNX: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HNX.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 331,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 332,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-ACCESS-TRAD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 333,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 334,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-INCIDENT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 335,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-EXC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 336,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-ERROR-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 337,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 338,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-HOSE",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).\n\nLiên quan DOC-MEM-HOSE: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HOSE.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 339,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AC-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 340,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-ACCESS-TRAD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 341,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 342,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-INCIDENT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 343,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-EXC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 344,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-ERROR-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 345,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 346,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-SBV-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-AML-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 347,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SBV-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-AML-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 348,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SBV-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-KYC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 349,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SBV-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-MON-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 350,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SBV-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-RISK-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 351,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SBV-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-AML-SANCTION-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 352,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-SSC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 353,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 354,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-INSP-COORD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 355,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-ADHOC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 356,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-SSC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 357,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-SANC-REMEDY-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 358,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-MEM-VSDC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 359,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-IN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 360,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 361,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-OUT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 362,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 363,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DEP-TRANSFER-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 364,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-DER-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 365,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-ACCESS-TRAD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 366,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 367,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-IT-INCIDENT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 368,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-REP-EXC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 369,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.\n\nCăn cứ pháp lý neo (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 370,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-BHXH-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 371,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-DOF-PROV",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-CAP-INC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 372,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-DOF-PROV",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-HQ-CHANGE",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 373,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-DOF-PROV",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-ART-01",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).\n\nLiên quan DOC-ART-01: Đổi logic sang AX-GOV; giữ như supporting internal doc cho event thay đổi, không coi là supervisory routine item.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 374,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-DOF-PROV",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-ENT-ERC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 375,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-DOF-PROV",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-ENT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 376,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-GOVINSPECT",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-SANC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 377,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-GOVINSPECT",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-AML",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Văn bản Chính phủ/Bộ ngành — tham chiếu khung giám sát.",
    "confidence": "LOW",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 378,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-GOVINSPECT",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-BOND",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Văn bản Chính phủ/Bộ ngành — tham chiếu khung giám sát.",
    "confidence": "LOW",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 379,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-GOVINSPECT",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-LABOR",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Văn bản Chính phủ/Bộ ngành — tham chiếu khung giám sát.",
    "confidence": "LOW",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 380,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-GOVINSPECT",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-SEC-155",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Văn bản Chính phủ/Bộ ngành — tham chiếu khung giám sát.",
    "confidence": "LOW",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 381,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-GOVINSPECT",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-SEC-156",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Văn bản Chính phủ/Bộ ngành — tham chiếu khung giám sát.",
    "confidence": "LOW",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 382,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-GOVINSPECT",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-DEC-TAX",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Văn bản Chính phủ/Bộ ngành — tham chiếu khung giám sát.",
    "confidence": "LOW",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 383,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-REG-HNX-LIST",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "HNX ban hành/áp dụng quy chế niêm yết/giao dịch.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 384,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-BIZ-ADD",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 385,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-CAP-INC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 386,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-HQ-CHANGE",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 387,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-PROD-NEW",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 388,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-SANC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 389,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-MEM-HNX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).\n\nLiên quan DOC-MEM-HNX: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HNX.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 390,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-BOND-GOV-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 391,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-REG-HOSE-LIST",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "HOSE ban hành/áp dụng quy chế niêm yết/giao dịch.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 392,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-BIZ-ADD",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 393,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-CAP-INC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 394,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-HQ-CHANGE",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 395,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-PROD-NEW",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 396,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-SANC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 397,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-MEM-HOSE",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).\n\nLiên quan DOC-MEM-HOSE: Giữ AX-SUP; AX-CON; AX-SRV và ghi rõ đây là bộ hồ sơ riêng của HOSE.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 398,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-LABOR-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).\n\nLiên quan DOC-LABOR-REPORT: Đổi trục chính sang AX-EMP; vẫn cross-reference AX-SUP.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-EMP; AX-COM",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 399,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-EMP",
      "AX-SUP",
      "AX-COM"
    ]
  },
  {
    "source": "ST-MOF",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-CIR-LABOR",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Bộ Tài chính ban hành/điều hành thông tư (mức khung).",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 400,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-MOF",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-CIR-SBV-PAY",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Bộ Tài chính ban hành/điều hành thông tư (mức khung).",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 401,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-MOF",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-CIR-SEC-DEPOSIT",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Bộ Tài chính ban hành/điều hành thông tư (mức khung).",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 402,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-MOF",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-CIR-SEC-DISC",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Bộ Tài chính ban hành/điều hành thông tư (mức khung).",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 403,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-MOF",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-CIR-SEC-FIRM",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Bộ Tài chính ban hành/điều hành thông tư (mức khung).",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 404,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-MOF",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-CIR-SEC-TRAD",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Bộ Tài chính ban hành/điều hành thông tư (mức khung).",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 405,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-MOF",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-CIR-TAX",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Bộ Tài chính ban hành/điều hành thông tư (mức khung).",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 406,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SBV-AML",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-REG-SBV-AML",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "NHNN/FIU ban hành quy định AML áp dụng cho CTCK.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 407,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SBV-AML",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-PROD-NEW",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 408,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SBV-AML",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-AML-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 409,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SBV-AML",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-AML-REPORT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 410,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SBV-AML",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-AML-KYC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 411,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SBV-AML",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-AML-MON-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 412,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SBV-AML",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-AML-RISK-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 413,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SBV-AML",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-AML-SANCTION-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 414,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SBV-BRANCH",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-HQ-CHANGE",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 415,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-REG-SSC-REP",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "SSC ban hành/áp dụng quy định về báo cáo/giám sát/thanh tra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 416,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-BIZ-ADD",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 417,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-CAP-INC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 418,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-HQ-CHANGE",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 419,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-PROD-NEW",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 420,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-SANC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 421,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-FS-AUDIT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 422,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-REP-SSC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 423,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SEC-LIC-BIZ",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 424,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SEC-LIC-CAP",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 425,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SEC-LIC-HQ",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 426,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SEC-LIC-MAIN",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 427,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SEC-LIC-MAN",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).\n\nLiên quan DOC-SEC-LIC-MAN: Giữ phần regulatory ở AX-SUP; ghi rõ tài liệu nhân sự nội bộ tách sang AX-GOV.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 428,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-TBD-CLIENT-TC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 429,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-TBD-PROD-APPROVAL",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).\n\nLiên quan DOC-TBD-PROD-APPROVAL: Đổi thành internal approval doc; xếp chính ở AX-GOV/AX-SRV, chỉ cross-reference sang AX-SUP.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 430,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-TBD-REG-REG",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 431,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-AC-FREEZE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 432,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-DISC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 433,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-FS-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 434,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-GOV-REP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 435,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-INSP-COORD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 436,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-IT-ACCESS-GEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 437,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-REP-ADHOC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 438,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-REP-SSC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 439,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-RISK-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 440,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-SANC-REMEDY-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 441,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-SEC-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 442,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-TRADING-NEWBIZ-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 443,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-STATEAUDIT",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-SANC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 444,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-CAP-INC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 445,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-HQ-CHANGE",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 446,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-TAX-DECL",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).\n\nLiên quan DOC-TAX-DECL: Đổi mô tả sang nghĩa vụ thuế định kỳ (kê khai/quyết toán/báo cáo).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 447,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-TAX-REGISTER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 448,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-VNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-BOND-CORP-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 449,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-IT-ACCESS-TRAD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 450,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-IT-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 451,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-IT-INCIDENT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 452,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-TRADING-ERROR-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 453,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "ISSUES/ADMINISTERS",
    "target": "LB-REG-VSDC-MEM",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "VSDC ban hành/áp dụng quy chế thành viên/lưu ký/bù trừ.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 454,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-BIZ-ADD",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 455,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-PROD-NEW",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 456,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "EV-SANC",
    "targetType": "EV",
    "axis": "AX-SUP",
    "note": "Stakeholder tham gia/giám sát khi sự kiện xảy ra.",
    "confidence": "MEDIUM",
    "otherAxes": null,
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 457,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-MEM-VSDC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nĐầu mối tiếp nhận/kiểm tra hồ sơ (gợi ý).",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 458,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-AC-CHANGE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 459,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-AC-CLOSE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 460,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-AC-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 461,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-DEP-IN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 462,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-DEP-OPEN-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 463,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-DEP-OUT-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 464,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-DEP-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 465,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-DEP-TRANSFER-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 466,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-DER-AC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 467,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-DER-SETTLE-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.\n\nCơ quan/SRO liên quan chính khi vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 468,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-PAYBANK",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-CIR-SBV-PAY",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Ngân hàng thanh toán chịu/áp dụng khung pháp lý ngân hàng thanh toán và AML.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 469,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-PAYBANK",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-LAW-SBV",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Ngân hàng thanh toán chịu/áp dụng khung pháp lý ngân hàng thanh toán và AML.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 470,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-PAYBANK",
    "sourceType": "ST",
    "relation": "RELATED_TO",
    "target": "LB-REG-SBV-AML",
    "targetType": "LB",
    "axis": "AX-SUP",
    "note": "Ngân hàng thanh toán chịu/áp dụng khung pháp lý ngân hàng thanh toán và AML.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 471,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 472,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-EXPLAIN-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 473,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-WORK-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 474,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-REP-ADHOC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 475,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SANC-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 476,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SANC-REMEDY-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 477,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-INSP-COORD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 478,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-BHXH-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-SANC-REMEDY-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 479,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-GOVINSPECT",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-INSP-COORD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 480,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-GOVINSPECT",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-SANC-REMEDY-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 481,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 482,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-DISC-REGULAR-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 483,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-REP-HNX-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 484,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-UPDATE-HNX-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 485,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HNX",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-REP-EXC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 486,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 487,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-DISC-REGULAR-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 488,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-REP-HOSE-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 489,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-UPDATE-HOSE-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 490,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-HOSE",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-REP-EXC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 491,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 492,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-EXPLAIN-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 493,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-WORK-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 494,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-REP-ADHOC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 495,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SANC-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 496,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-LABOR-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SANC-REMEDY-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 497,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-PAYBANK",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-PAYBANK-ACCT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 498,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON"
    ]
  },
  {
    "source": "ST-PAYBANK",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-PAYBANK-CONNECT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 499,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-PAYBANK",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-UPDATE-PAYBANK",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 500,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "ST-SBV",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-UPDATE-SBV-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 501,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SBV-BRANCH",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-UPDATE-SBV-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 502,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 503,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-DISC-REGULAR-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 504,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-DEC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 505,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-EXPLAIN-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 506,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-WORK-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 507,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-REP-ADHOC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 508,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SANC-DEC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 509,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-SSC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SANC-REMEDY-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 510,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 511,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-EXPLAIN-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 512,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-INSP-WORK-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 513,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-REP-ADHOC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 514,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SANC-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 515,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-SANC-REMEDY-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 516,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-INSP-COORD-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 517,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-TAX-LOCAL",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-SANC-REMEDY-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 518,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-REP-VSDC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 519,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "DOC-UPDATE-VSDC-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 520,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "ST-VSDC",
    "sourceType": "ST",
    "relation": "SUPERVISES/RECEIVES",
    "target": "PR-REP-EXC-01",
    "targetType": "PR",
    "axis": "AX-SUP",
    "note": "Đầu mối tiếp nhận/kiểm tra hồ sơ hoặc giám sát quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 521,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 522,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 523,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 524,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 525,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 526,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 527,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SBV-PAY",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-PAYBANK-ACCT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 528,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON"
    ]
  },
  {
    "source": "LB-CIR-SBV-PAY",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-PAYBANK-CONNECT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 529,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SBV-PAY",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-PAYBANK",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 530,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-CIR-SBV-PAY",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-SBV-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 531,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DEPOSIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-VSDC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 532,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DEPOSIT",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-VSDC-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 533,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 534,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 535,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-REGULAR-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 536,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-REGULAR-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 537,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 538,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-HNX-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 539,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-HOSE-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 540,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-SEC-DISC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 541,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 542,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 543,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 544,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 545,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 546,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-CIR-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 547,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 548,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 549,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 550,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 551,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 552,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 553,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 554,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 555,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-REGULAR-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 556,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-REGULAR-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 557,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 558,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-HNX-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 559,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-HOSE-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 560,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-VSDC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 561,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-HNX-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 562,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-HOSE-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 563,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-155",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-VSDC-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 564,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-156",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 565,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-156",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 566,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-156",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 567,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-156",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-DEC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 568,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-SEC-156",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 569,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 570,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 571,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 572,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 573,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 574,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-DEC-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 575,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 576,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 577,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 578,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 579,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 580,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-LABOR",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 581,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SBV",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-PAYBANK-ACCT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-CON",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 582,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-CON"
    ]
  },
  {
    "source": "LB-LAW-SBV",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-PAYBANK-CONNECT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 583,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SBV",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-PAYBANK",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 584,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-LAW-SBV",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-SBV-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 585,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 586,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 587,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-REGULAR-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 588,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-REGULAR-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 589,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 590,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 591,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 592,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 593,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-HNX-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 594,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-HOSE-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 595,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-VSDC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 596,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-DEC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 597,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 598,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-HNX-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 599,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-HOSE-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 600,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SEC",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-VSDC-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 601,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 602,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 603,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 604,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 605,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 606,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-SOCIAL",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 607,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 608,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 609,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 610,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 611,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 612,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-LAW-TAX",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 613,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 614,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-REGULAR-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 615,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-HNX-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 616,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HNX-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-HNX-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 617,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 618,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-REGULAR-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 619,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-HOSE-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 620,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-HOSE-LIST",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-HOSE-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 621,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SBV-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-PAYBANK-CONNECT",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 622,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-SBV-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-PAYBANK",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-GOV; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 623,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV",
      "AX-SRV"
    ]
  },
  {
    "source": "LB-REG-SBV-AML",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-SBV-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-CON; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 624,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-CON",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 625,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-DISC-REGULAR-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 626,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-DEC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 627,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-EXPLAIN-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 628,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-INSP-WORK-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 629,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-ADHOC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 630,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-SSC-REP",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-SANC-REMEDY-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 631,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-REP-VSDC-PER",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 632,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "LB-REG-VSDC-MEM",
    "sourceType": "LB",
    "relation": "BASIS_FOR",
    "target": "DOC-UPDATE-VSDC-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Căn cứ pháp lý neo cho hồ sơ/quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 633,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-BIZ-ADD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 634,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-BIZ-ADD",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 635,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 636,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-CAP-INC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 637,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 638,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 639,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-UPDATE-HNX-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 640,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-UPDATE-HOSE-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 641,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-UPDATE-PAYBANK",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 642,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-UPDATE-SBV-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 643,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-HQ-CHANGE",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-UPDATE-VSDC-INFO",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 644,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 645,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 646,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-REGULAR-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 647,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-PROD-NEW",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-REGULAR-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-SRV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 648,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-SRV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-EXC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 649,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-DISC-ADHOC-SSC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 650,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-INSP-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 651,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-INSP-DEC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 652,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-INSP-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 653,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-INSP-EXPLAIN-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 654,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-INSP-EXPLAIN-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 655,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-INSP-EXPLAIN-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 656,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-INSP-WORK-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 657,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-INSP-WORK-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 658,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-INSP-WORK-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 659,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SANC-DEC-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 660,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SANC-DEC-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 661,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SANC-DEC-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 662,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SANC-REMEDY-LABOR",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 663,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SANC-REMEDY-SEC",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 664,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  },
  {
    "source": "EV-SANC",
    "sourceType": "EV",
    "relation": "TRIGGERS",
    "target": "DOC-SANC-REMEDY-TAX",
    "targetType": "DOC",
    "axis": "AX-SUP",
    "note": "Sự kiện kích hoạt lập/cập nhật hồ sơ hoặc vận hành quy trình.",
    "confidence": "MEDIUM",
    "otherAxes": "AX-COM; AX-GOV",
    "checkStatus": "NOT_CHECKED",
    "comments": null,
    "order": 665,
    "primaryAxis": "AX-SUP",
    "axisList": [
      "AX-SUP",
      "AX-COM",
      "AX-GOV"
    ]
  }
];

