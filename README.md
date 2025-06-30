# 🔐 Auth App

A secure authentication system built with Node.js, Express, and MongoDB featuring JWT tokens and bcrypt password hashing.

## ✨ Features

- **🔒 Secure Registration** - Password hashing with bcryptjs
- **🎯 JWT Authentication** - Token-based user sessions
- **📊 MongoDB Integration** - Reliable data storage
- **⚡ Express.js API** - Fast and lightweight
- **🛡️ Input Validation** - Email and password requirements
- **🔄 Error Handling** - Comprehensive error responses

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd auth-app
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
PORT=3001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/authapp
JWT_SECRET=your_super_secure_jwt_secret_key_minimum_32_characters
```

### 3. Database Setup
- **Option A:** MongoDB Atlas (Recommended)
  - Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas)
  - Create a free cluster
  - Get your connection string

- **Option B:** Local MongoDB
  - Install MongoDB locally
  - Start with `mongod`
  - Use: `mongodb://localhost:27017/authapp`

### 4. Run the Application
```bash
# Production
npm start

# Development (with auto-restart)
npm run dev
```

Server will start at `http://localhost:3001`

## 📡 API Endpoints

### Register User
```http
POST /api/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}
```

### Login User
```http
POST /api/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}
```

## 🧪 Testing with Postman/cURL

### Register a new user:
```bash
curl -X POST http://localhost:3001/api/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Login with existing user:
```bash
curl -X POST http://localhost:3001/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 📁 Project Structure

```
auth-app/
├── config/
│   └── database.js      # MongoDB connection
├── models/
│   └── User.js          # User schema & methods
├── routes/
│   └── auth.js          # Authentication routes
├── .env                 # Environment variables
├── server.js            # Main server file
└── package.json         # Dependencies
```

## 🔧 Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT token generation
- **dotenv** - Environment variables

## 🛡️ Security Features

- ✅ Password hashing with bcrypt (12 rounds)
- ✅ JWT token authentication
- ✅ Input validation and sanitization
- ✅ Environment variable protection
- ✅ Error handling without data leaks

## 📝 HTTP Status Codes

### Success Responses
- **`200`** - OK (successful login, health check)
- **`201`** - Created (successful user registration)

### Error Responses
All error endpoints return consistent responses:
```json
{
  "success": false,
  "message": "Error description"
}
```

- **`400`** - Bad Request
  - Missing email or password
  - User already exists with email
  
- **`401`** - Unauthorized
  - Invalid credentials (wrong email/password)
  
- **`404`** - Not Found
  - Route not found
  
- **`500`** - Internal Server Error
  - Database connection issues
  - Server-side errors
  - Unexpected application errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.
