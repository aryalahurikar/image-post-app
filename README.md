# Image Post App

Image Post App is a full stack image posting application where users can upload images with captions. Images are stored using ImageKit and image URLs are saved in MongoDB.

---

# Features

- Upload images
- Add captions to posts
- Store images using ImageKit
- Save image URLs in MongoDB
- Fetch and display all posts

---

# Tech Stack

## Frontend
- React.js
- Vite
- axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit
- CORS
- dotenv

---

# Project Structure

```bash
project-root
│
├── frontend
└── backend
```

---

# Installation

## Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend folder:

```env

MONGO_URI=mongodb://127.0.0.1:27017/image-pro

IMAGEKIT_PUBLIC_KEY=your_public_key

IMAGEKIT_PRIVATE_KEY=your_private_key

IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

Start backend server:

```bash
node server.js
```

or

```bash
nodemon server.js
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# API Endpoints

## Create Post

```http
POST /create-post
```

### Form Data

| Key | Type |
|-----|------|
| image | File |
| caption | String |

---

## Get All Posts

```http
GET /posts
```

---

# ImageKit Setup

1. Create account at https://imagekit.io/

2. Copy:
- Public Key
- Private Key
- URL Endpoint

3. Add them inside `.env` file.

---

# Dependencies

```json
{
  "@imagekit/nodejs": "^7.5.0",
  "@imagekit/react": "^5.0.2",
  "cors": "^2.8.6",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "mongoose": "^9.4.1",
  "multer": "^2.1.1"
}
```

---

# Future Improvements

- Authentication
- Like and comment system
- Delete posts
- Responsive design

---

# Author
