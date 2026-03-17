# AX-EMP Legal Navigator v3

Bản này đã sync lại theo dữ liệu trong `PHS_AX-EMP_Validation_v1_3.xlsx`.

## Cấu trúc
- `src/data/axEmpV3.js`: dữ liệu node/edge AX-EMP v3
- `src/App.jsx`: giao diện Legal Navigator
- `src/styles.css`: toàn bộ style
- `src/main.jsx`: entry point Vite
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

## Ghi chú
- Layout đã thu nhỏ panel bên phải để vùng sơ đồ rộng hơn.
- Ngôn ngữ giao diện đã đổi sang hướng dẫn cho end-user.
- Dữ liệu đã bao gồm các bổ sung của v1.3 như:
  - `DOC-HR-PDPNOTICE`
  - các link mới của `ST-EMPLOYEE`
  - link mới của `ST-INTERN`
