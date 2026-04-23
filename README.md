# Legal Navigator · AX-EMP + AX-SUP

Bộ repo này là phiên bản hợp nhất từ:
- Repo mô phỏng **Quan hệ lao động (AX-EMP)** hiện có
- File validation **`PHS_AX-SUP_Validation_FINAL.xlsx`** cho nhánh **Quan hệ giám sát / quy định (AX-SUP)**

## Điểm đã hợp nhất
- Gộp dữ liệu node / edge của **AX-EMP** và **AX-SUP** vào cùng một app ReactFlow
- Bổ sung bộ lọc theo nhánh:
  - `Tất cả`
  - `AX-EMP`
  - `AX-SUP`
- Giữ logic **overlap** cho các node xuất hiện ở nhiều nhánh, ví dụ:
  - `ST-SSC`
  - `ST-LABOR-LOCAL`
  - `ST-BHXH-LOCAL`
  - `ST-TAX-LOCAL`
  - `LB-LAW-SEC`
  - `LB-LAW-LABOR`
  - `DOC-BHXH-REGISTER`
- Bổ sung quan hệ mới của AX-SUP như `ISSUES/ADMINISTERS`
- Ở panel chi tiết, mỗi node hiển thị:
  - trục chính
  - các trục áp dụng
  - ghi chú hợp nhất từ AX-EMP / AX-SUP nếu có overlap

## Cấu trúc chính
- `src/data/legalNavigatorData.js`: dữ liệu hợp nhất AX-EMP + AX-SUP
- `src/App.jsx`: giao diện Legal Navigator đã nâng cấp
- `src/styles.css`: style của app
- `src/main.jsx`: entry point React/Vite
- `index.html`: root HTML

## Chạy local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy Cloudflare Pages
- Build command: `npm run build`
- Build output directory: `dist`
