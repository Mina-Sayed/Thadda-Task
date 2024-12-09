Here's the translated version of the `README.md` in English:

---

# 📚 Thadda Task - Book Management API

This is a Node.js API application built with TypeScript, Express, and SQLite. The application includes JWT-based authentication and CRUD operations for managing books.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)

---

## 🚀 Installation

### 1. **Clone the repository**
```sh
git clone https://github.com/your-username/thadda-task.git
cd thadda-task
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Create a `.env` file**
Make sure to create a `.env` file at the root of the project with the following content:
```env
JWT_SECRET=your_jwt_secret
DB_NAME=book_management.db
```

### 4. **Run the application**
To start the development server:
```sh
npm run dev
```

The server will start at `http://localhost:3000`.

You can visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to view the Swagger API documentation.

---

## 🔗 API Endpoints

### **Authentication**

#### Login
- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Description:** Authenticate a user and receive a JWT token.

**Request Body:**
```json
{
  "username": "admin",
  "password": "password"
}
```

**Response:**
```json
{
  "token": "your_jwt_token"
}
```

---

### **Books**

All book-related endpoints require an `Authorization` header with a valid JWT token.

#### Create a Book
- **URL:** `/api/books`
- **Method:** `POST`
- **Request Body:**
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "publishedDate": "YYYY-MM-DD",
  "numberOfPages": 123
}
```

#### Get All Books
- **URL:** `/api/books`
- **Method:** `GET`

#### Get a Book by ID
- **URL:** `/api/books/:id`
- **Method:** `GET`

#### Update a Book
- **URL:** `/api/books/:id`
- **Method:** `PUT`
- **Request Body:**
```json
{
  "title": "Updated Title",
  "author": "Updated Author",
  "publishedDate": "YYYY-MM-DD",
  "numberOfPages": 456
}
```

#### Delete a Book
- **URL:** `/api/books/:id`
- **Method:** `DELETE`

---

## 🧪 Testing

To run the tests using Jest, use the following command:

```sh
npx jest
```

---

## 🏗️ Project Structure

```
├── src
│   ├── __tests__               # Test files
│   │   ├── auth.test.ts
│   │   ├── book.test.ts
│   │   ├── bookController.test.ts
│   │   ├── routes.test.ts
│   │   └── setup.ts
│   ├── config                  # Configuration files
│   │   ├── dbConfig.ts
│   │   └── swagger.ts
│   ├── controllers             # Controller files
│   │   └── bookController.ts
│   ├── middleware              # Middleware files
│   │   ├── auth.ts
│   │   └── errorHandler.ts
│   ├── models                  # Sequelize models
│   │   ├── book.ts
│   │   └── init.ts
│   ├── routes                  # Route definitions
│   │   ├── authRoutes.ts
│   │   └── bookRoutes.ts
│   ├── types                   # Custom TypeScript definitions
│   │   └── express.d.ts
│   └── app.ts                  # Express app configuration
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── database.sqlite             # SQLite database file
├── jest.config.js              # Jest configuration
├── package.json                # Project metadata and dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

---
