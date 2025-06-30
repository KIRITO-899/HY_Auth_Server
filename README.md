# 🔐 Auth App


## ✨ Features

- **🔒 Secure Registration** - Password hashing with bcryptjs (12 rounds)
- **🎯 JWT Authentication** - Token-based user sessions with 7-day expiry
- **📊 MongoDB Integration** - Reliable data storage with Mongoose ODM
- **⚡ Express.js API** - Fast and lightweight REST API
- **🛡️ Input Validation** - Email and password requirements with error handling
- **🔄 Comprehensive Error Handling** - Consistent error responses across all endpoints

---

## 🚀 Quick Start

### 1. 📦 Clone & Install
```bash
git clone https://github.com/yourusername/auth-app.git
cd auth-app
npm install
```

### 2. ⚙️ Environment Setup
Create a `.env` file in the root directory:
```env
PORT=3001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/authapp
JWT_SECRET=your_super_secure_jwt_secret_key_minimum_32_characters
```

### 3. 🗄️ Database Setup
**Option A: MongoDB Atlas** (Recommended)
- Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas)
- Create a free cluster
- Get your connection string

**Option B: Local MongoDB**
- Install MongoDB locally
- Start with `mongod`
- Use: `mongodb://localhost:27017/authapp`

### 4. 🏃‍♂️ Run the Application
```bash
# Production
npm start

# Development (with auto-restart)
npm run dev
```

🎉 Server will start at `http://localhost:3001`

---

## 📡 API Endpoints

### 🔑 Register User
```http
POST /api/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**✅ Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com"
  }
}
```

### 🔓 Login User
```http
POST /api/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**✅ Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com"
  }
}
```

### 💚 Health Check
```http
GET /
```

**Response:**
```json
{
  "message": "Auth API is running!"
}
```

---

## 🧪 Testing

### 🔬 Using cURL

**Register a new user:**
```bash
curl -X POST http://localhost:3001/api/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**Login with existing user:**
```bash
curl -X POST http://localhost:3001/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 📬 Using Postman
1. Create a new request
2. Set method to `POST`
3. Set URL to `http://localhost:3001/api/register` or `http://localhost:3001/api/login`
4. Add header: `Content-Type: application/json`
5. Add body (raw JSON) with email and password

---

## 📁 Project Structure

```
auth-app/
├── 📁 config/
│   └── 🔧 database.js          # MongoDB connection setup
├── 📁 models/
│   └── 👤 User.js              # User schema & password methods
├── 📁 routes/
│   └── 🔐 auth.js              # Authentication endpoints
├── 🔒 .env                     # Environment variables (gitignored)
├── 🚀 server.js                # Main Express server
├── 📋 package.json             # Dependencies & scripts
└── 📖 README.md                # This file
```

---

## 🔧 Technologies & Dependencies

| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime environment | Latest LTS |
| **Express.js** | Web framework | ^4.18.2 |
| **MongoDB** | Database | Atlas/Local |
| **Mongoose** | MongoDB ODM | ^7.5.0 |
| **bcryptjs** | Password hashing | ^2.4.3 |
| **jsonwebtoken** | JWT tokens | ^9.0.2 |
| **dotenv** | Environment variables | ^16.3.1 |

---

## 🛡️ Security Features

- ✅ **Password Hashing** - bcrypt with 12 salt rounds
- ✅ **JWT Authentication** - Secure token-based sessions
- ✅ **Input Validation** - Email format and password length validation
- ✅ **Environment Variables** - Secure configuration management
- ✅ **Error Handling** - No sensitive data leaks in error responses
- ✅ **Data Sanitization** - Mongoose schema validation

---

## 📊 HTTP Status Codes

### ✅ Success Responses
| Code | Description | Usage |
|------|-------------|-------|
| **200** | OK | Successful login, health check |
| **201** | Created | Successful user registration |

### ❌ Error Responses
All error endpoints return consistent JSON responses:
```json
{
  "success": false,
  "message": "Error description"
}
```

| Code | Type | Common Causes |
|------|------|---------------|
| **400** | Bad Request | Missing email/password, user already exists |
| **401** | Unauthorized | Invalid credentials (wrong email/password) |
| **404** | Not Found | Route not found |
| **500** | Server Error | Database issues, unexpected application errors |

---

## 🔒 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3001` |
| `MONGODB_URI` | Database connection string | `mongodb+srv://...` |
| `JWT_SECRET` | JWT signing secret | `your_secure_secret_key` |

> ⚠️ **Important:** Never commit your `.env` file to version control!

---

## 🚀 Deployment

### 📦 Production Checklist
- [ ] Set strong `JWT_SECRET` (32+ characters)
- [ ] Use MongoDB Atlas for database
- [ ] Set appropriate `PORT` for your hosting platform
- [ ] Add CORS if needed for frontend integration
- [ ] Set up proper logging
- [ ] Configure rate limiting

### 🌐 Hosting Platforms
- **Heroku:** Set config vars for environment variables
- **Vercel:** Add environment variables in dashboard
- **Railway:** Configure environment in project settings
- **DigitalOcean:** Use App Platform with environment variables

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. 🍴 **Fork** the repository
2. 🔀 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. 💻 **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🎯 **Open** a Pull Request

### 📝 Code Standards
- Use meaningful commit messages
- Follow existing code style
- Add comments for complex logic
- Test your changes

---

