# AX-EMP Legal Navigator v3.1

Bản này đã được rà soát lại theo `PHS_AX-EMP_Validation_v1_3.xlsx` và đã đóng gói đúng cấu trúc để upload GitHub / deploy bằng Cloudflare Pages.

## Cấu trúc
- `src/data/axEmpV3.js`: dữ liệu node/edge AX-EMP
- `src/App.jsx`: giao diện Legal Navigator
- `src/styles.css`: toàn bộ style
- `src/main.jsx`: entry point React/Vite
- `index.html`: root HTML

## Đã kiểm tra lại theo v1.3
- Có `DOC-HR-PDPNOTICE` (Thông báo bảo vệ dữ liệu)
- `DOC-HR-CODE` đã có link pháp lý với `LB-LAW-SEC`
- `ST-EMPLOYEE` đã có thêm link với:
  - `DOC-SEC-PRACT`
  - `DOC-LABOR-CLA`
  - `DOC-HR-PDPNOTICE`
  - `PR-HR-RECRUIT-01`
- `ST-INTERN` đã có thêm link với `DOC-HR-PDPNOTICE`

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
