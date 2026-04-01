# 🎵 Spotify Backend API

A fully functional backend system for a Spotify-like application built with Node.js, Express, and MongoDB. This project demonstrates secure authentication, role-based access control, and music/album management.

---

## 🌐 Live API

🔗 [Live API](https://spotify-backend-hecd.onrender.com)

🔗 Base URL:
https://spotify-backend-hecd.onrender.com

### 📌 How to Test

Use Postman and import the provided collection.

1. Run Login API to get token  
2. Use Bearer Token for protected routes  

### 🔑 Example Endpoint

GET https://spotify-backend-hecd.onrender.com/api/music

## 🚀 Features

* 🔐 JWT Authentication (Login / Register)
* 🛡️ Role-Based Access Control (Admin / User)
* 🎵 Upload & Manage Music Files (Cloud Storage Integration)
* 🔗 Store Media as URL in Database
* ▶️ Direct Audio Streaming via Browser
* 💽 Create & Manage Albums
* 📦 RESTful API Design
* 🧪 API Testing with Postman
* 🗄️ MongoDB Database Integration

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Token)
* **Testing Tool:** Postman

---

## 🎧 Music Upload & Streaming

* Music files are uploaded using API (multipart/form-data)
- Files are stored in a cloud storage service
- The file URL is saved in MongoDB
- Users can directly stream music using the stored URL

👉 Example:
Paste the stored music URL in browser → audio plays instantly.

```

## 📁 Project Structure

```
spotify-backend/
├── src/              # Source code
├── postman/          # Postman collection
├── data/             # Sample database data
├── README.md
├── .gitignore
└── .env.example
```

---

## 📬 API Endpoints

### 🔑 Authentication

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

---

### 🎵 Music

* `POST /api/music/create` → Create new song (Admin)
* `GET /api/music` → Get all songs

---

### 💽 Albums

* `POST /api/albums/create` → Create album (Admin/User)

---

## 📦 Postman Collection

You can find the complete API collection here:

```
/postman/spotify-api.json
```

👉 Import this file into Postman to test all APIs easily.

## 📬 How to Test APIs

1. Download the Postman collection from `/postman/spotify-api.json`

2. Open Postman

3. Click **Import → Upload File** and select the JSON file

4. Run the **Login API** first to get JWT token

5. Copy the token

6. For protected routes:
   - Go to Authorization tab
   - Select Bearer Token
   - Paste your token

7. Now you can test all APIs

Base URL:
https://spotify-backend-hecd.onrender.com

---

## 🗄️ Sample Database

Sample MongoDB data is available here:

```
/data/data-music.json
/data/data-users.json
/data/data-albums.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-krishnrajchauhan/spotify-backend.git
cd spotify-backend
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Create `.env` file

Create a `.env` file in root and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

### 4️⃣ Run the server

```
npm start
```

---


## 🧠 Key Learnings

* Implemented secure authentication using JWT
* Designed scalable REST APIs
* Applied role-based authorization
* Integrated MongoDB with backend services
* Structured project following industry practices

---

## 👨‍💻 Author

**Krishnraj Chauhan**

---

