# 💰 Expense Tracker

A full-stack expense tracking application built with React, TypeScript, Node.js, and MongoDB Atlas.

## ✨ Features

- 📝 Create and manage expense categories
- 💵 Add expenses with amount, description, and category
- 📊 View expenses grouped by category
- 💰 Track total spending across all expenses
- 🗑️ Delete expenses and categories (with cascade deletion)
- 🎨 Modern, responsive UI with Tailwind CSS

## 🛠️ Tech Stack
- **Husky** - Manage Git hooks
### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Axios** - HTTP client


### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web framework
- **MongoDB Atlas** - Database
- **Mongoose** - ODM for MongoDB

## 📁 Project Structure

```
expense-tracker/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── scenes/      # Page components
│   │   ├── services/    # API services
│   │   ├── types/       # TypeScript types
│   │   └── utils/       # Utility functions
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd expense-tracker
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm приведено
   ```

### Configuration

1. **Backend Environment Variables**
   
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   ```

2. **Frontend Environment Variables**
   
   Create a `.env` file in the `frontend/` directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on `http://localhost:5000`

2. **Start the frontend dev server**
   ```bash
   cd frontend
   npm run dev
   ```
   App opens at `http://localhost:5173`

NOTE: You can use these commands directly from the root folder
```
npm run backend:dev 
npm run frontend:dev 
``` 

## 📡 API Endpoints

### Categories
- `GET /api/category` - Get all categories
- `POST /api/category` - Create a category
- `DELETE /api/category/:id` - Delete a category (and its expenses)

### Expenses
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create an expense
- `DELETE /api/expenses/:id` - Delete an expense

## 🏗️ Architecture

### Frontend
- **Scenes** - Page-level components (expenses, categories)
- **Components** - Reusable UI components
- **Services** - API communication layer
- **Types** - TypeScript type definitions
- **Utils** - Helper functions

### Backend
- **Routes** - API endpoint definitions
- **Controllers** - Business logic
- **Models** - Database schemas
- **Config** - Configuration files

## 🎯 Key Features Implementation

- **Cascade Deletion**: When a category is deleted, all associated expenses are automatically removed
- **Populated Fields**: Expenses include full category details via MongoDB population
- **Type Safety**: Full TypeScript support across frontend and backend
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🚧 Future Enhancements

- Budget alerts and notifications
- Expense filtering and search
- Date range filtering
- Export to CSV/PDF
- User authentication
- Charts and analytics


## 👨‍💻 Author

ENGLAN MUCA

