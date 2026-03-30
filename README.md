# 📝 Blog RESTful API (Node.js + Express + MongoDB)

## 📌 Giới thiệu

Đây là project xây dựng **RESTful API cho hệ thống Blog cá nhân** sử dụng:

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Multer (upload ảnh)

Người dùng có thể:

* Đăng ký / đăng nhập
* Tạo, sửa, xoá bài viết
* Upload ảnh cho bài viết
* Xem tất cả bài viết
* Tìm kiếm bài viết

---

## ⚙️ Cài đặt & chạy project

### 1. Clone project

```bash
git clone https://github.com/a38506/blog-api.git
cd blog-api
```

### 2. Cài dependencies

```bash
npm install
```

### 3. Tạo file `.env`

```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### 4. Chạy server

```bash
npm run dev
# hoặc
npm start
```

👉 Server chạy tại:
`http://localhost:3000`

---

## 📁 Cấu trúc project

```
src/
├── config/          # Kết nối database
├── controllers/     # Xử lý logic
├── middlewares/     # Auth, upload, error
├── models/          # Mongoose models
├── routes/          # API routes
├── services/        # Business logic
└── utils/
public/uploads/      # Lưu ảnh upload
```

---

## 🔐 Authentication

Sử dụng **JWT Token**

👉 Khi login thành công sẽ nhận:

```json
{
  "token": "your_jwt_token"
}
```

👉 Gửi token trong header:

```
Authorization: Bearer <token>
```

---

## 📮 API Endpoints

### 🔑 Auth

#### POST /api/auth/register

Đăng ký

```json
{
  "username": "vietbao",
  "email": "vietbao@gmail.com",
  "password": "123456"
}
```

#### POST /api/auth/login

Đăng nhập

```json
{
  "email": "vietbao@gmail.com",
  "password": "123456"
}
```

---

### 📝 Post

#### GET /api/posts

Lấy tất cả bài viết (có phân trang)

```
/api/posts?page=1&limit=10
```

---

#### GET /api/posts/:id

Lấy chi tiết bài viết

---

#### POST /api/posts (có token)

Tạo bài viết (form-data)

```
title: Bài viết đầu tiên
content: Nội dung test
image: (file ảnh)
```

---

#### PUT /api/posts/:id (có token)

Cập nhật bài viết

```json
{
  "title": "Updated title",
  "content": "Updated content"
}
```

---

#### DELETE /api/posts/:id (có token)

Xoá bài viết

---

#### GET /api/posts/my-posts (có token)

Lấy bài viết của user hiện tại

---

#### GET /api/posts/search

Tìm kiếm

```
/api/posts/search?q=node&tag=Node.js
```

---

## 🖼 Upload ảnh

* Sử dụng **multer**
* Ảnh lưu tại: `public/uploads`
* Truy cập:

```
http://localhost:3000/uploads/filename.png
```

---

## 🔒 Authorization

* User chỉ sửa/xoá bài của mình
* Admin có thể xoá tất cả bài viết

---

## ⚠️ Error Handling

Trả về dạng:

```json
{
  "error": "message"
}
```

---

## 🧪 Test API

Sử dụng:

* Postman
* Thunder Client

---

## 🚀 Công nghệ sử dụng

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* multer

---

## 📷 Screenshot
---
<img width="1169" height="821" alt="image" src="https://github.com/user-attachments/assets/805cc92f-a959-48b7-9f0b-c3e72c4654a5" />
<img width="1174" height="730" alt="image" src="https://github.com/user-attachments/assets/688cf2ec-bd55-4a93-9637-4be8b2ecf6cd" />
<img width="1168" height="842" alt="image" src="https://github.com/user-attachments/assets/fa779dcc-51bc-4407-a7bc-d851be3f9df0" />
<img width="1183" height="823" alt="image" src="https://github.com/user-attachments/assets/08937a2a-3c14-447e-b0f1-c5ae14900d13" />
<img width="1179" height="805" alt="image" src="https://github.com/user-attachments/assets/62c97389-716c-405a-bbcb-3bb42e223995" />
<img width="1166" height="798" alt="image" src="https://github.com/user-attachments/assets/5b484a96-9b66-4bcc-9bc4-3b1fcfd2ca9c" />
<img width="1164" height="786" alt="image" src="https://github.com/user-attachments/assets/670d9398-b46b-4dda-8d87-a1b80fb3e0a7" />
---
