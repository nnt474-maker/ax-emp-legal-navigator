# AX-EMP Legal Navigator

Bộ project React/Vite để demo website knowledge graph cho AX-EMP.

## Chạy trên máy của bạn

```bash
npm install
npm run dev
```

## Build để deploy

```bash
npm install
npm run build
```

Thư mục output là `dist/`.

## Đưa sếp xem nhanh

### Cách 1: Netlify
- Tạo tài khoản Netlify
- Tạo repo GitHub mới và upload toàn bộ project này
- Trên Netlify chọn **Add new site** → **Import an existing project**
- Chọn repo GitHub
- Build command: `npm run build`
- Publish directory: `dist`
- Deploy xong lấy link gửi sếp

### Cách 2: Cloudflare Pages
- Upload project này lên GitHub
- Trên Cloudflare Pages tạo project mới từ Git repo
- Build command: `npm run build`
- Output directory: `dist`
- Deploy xong lấy link gửi sếp

## Cấu trúc chính
- `src/App.jsx`: giao diện chính
- `src/main.jsx`: entry point
- `src/index.css`: Tailwind base
- `vite.config.js`: cấu hình Vite

## Ghi chú
Bản này đang dùng dữ liệu mẫu AX-EMP hardcode trong `src/App.jsx` để demo nhanh.
