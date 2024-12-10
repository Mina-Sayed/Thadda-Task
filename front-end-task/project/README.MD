---

# 📝 To-Do List Application

A simple to-do list application built with ReactJS, TypeScript, and Vite, integrating the JSONPlaceholder API. The app allows users to manage to-dos locally with features like adding, marking as completed, filtering, and deleting items.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [API Integration](#api-integration)
- [License](#license)

---

## ✨ Features

- Fetch and display to-do items from the JSONPlaceholder API (first 20 items).
- Add new to-do items locally.
- Mark items as completed or pending.
- Delete items locally.
- Filter to-dos by all, completed, or pending.
- Persist state using local storage.

---

## 🛠️ Technologies Used

- **Frontend Framework**: ReactJS (with TypeScript)
- **Build Tool**: Vite
- **State Management**: Local store (custom React hooks)
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Local Storage**: Browser's `localStorage`

---

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mina-Sayed/Thadda-Task.git
   cd front-end-task/project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 📂 Folder Structure

```
src/
├── components/              # Reusable UI components
│   ├── TodoFilter.tsx       # Filter bar for to-do items
│   ├── TodoInput.tsx        # Input field for adding new to-dos
│   ├── TodoItem.tsx         # Individual to-do item component
│   └── TodoList.tsx         # List of all to-do items
├── services/                # API services
│   └── api.ts               # Axios functions for fetching data
├── store/                   # Local state management
│   └── todoStore.ts         # Custom store for managing to-dos
├── types/                   # TypeScript type definitions
│   └── todo.ts              # Type definitions for a to-do item
├── App.tsx                  # Main application component
├── index.css                # Global styles
├── main.tsx                 # Application entry point
└── vite-env.d.ts            # Vite environment definitions
```

---

## 🌐 API Integration

This application uses the following endpoint from the JSONPlaceholder API:

### Fetch To-Do Items
- **URL**: `https://jsonplaceholder.typicode.com/todos`
- **Method**: `GET`
- **Response Example**:
  ```json
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
  ```
- **Usage**: Only the first 20 items are fetched for simplicity.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

