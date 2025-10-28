# 💰 Expense Tracker

A full-stack expense tracking application built with React, TypeScript, Node.js, and MongoDB Atlas.

## ✨ Features

- 📝 Create and manage expense categories
- 💵 Add expenses with amount, description, and category
- 📊 View expenses grouped by category
- 💰 Track total spending across all expenses
- 🗑️ Delete expenses and categories (with cascade deletion)
- 📧 Email notifications when spending reaches threshold
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
- **nodemailer** - Email service (Gmail SMTP)

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
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/EnglanM/expense-tracker.git
   cd expense-tracker
   nvm use (if you have nvm installed in your machine, if not either install nvm or use node version v23.6.1)
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

1. **Backend Environment Variables**
   
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   GMAIL_USER=your_email@gmail.com
   GMAIL_APP_PASSWORD=your_generated_app_password
   ```

   **📧 Email Service Setup (Gmail SMTP)**
   
   To enable email notifications:
   1. Enable **2-Step Verification** in your Google account
   2. Go to [App Passwords](https://myaccount.google.com/apppasswords) → generate a new password for "Mail"
   3. Add the credentials to your `.env` file as shown above

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

### Email
- `POST /api/email` - Send an email to alert the user 

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


## Decisions Made

### Technology Stack
- **React 19 + TypeScript**: Chose the latest React version with TypeScript for type safety and better developer experience
- **Express 5**: Used Express 5 for the backend to leverage the latest features and performance improvements
- **MongoDB Atlas**: Selected cloud-based MongoDB for easy setup and scalability without local database management
- **Vite**: Chose Vite over Create React App for faster development builds and better DX
- **Tailwind CSS**: Selected for rapid UI development and consistent styling

### Architecture Decisions
- **Separate Frontend/Backend**: Maintained a clean separation of concerns with independent frontend and backend applications
- **Scene-based Organization**: Organized frontend code into "scenes" (page-level components) and reusable components for better code structure
- **Service Layer Pattern**: Created dedicated service files for API communication to keep components clean and maintainable

- **MongoDB Population**: Used Mongoose population to retrieve full category details with expenses for efficient data fetching

### Development Tools
- **Husky**: Integrated Husky for managing Git hooks to ensure code quality
- **Gmail SMTP**: Chose Gmail SMTP for email notifications as it's free and easy to set up with app passwords
- **Vite**: Nice build tool and development server, even suggested in the official React website

## ⏱️ Time Spent

Estimated total development time: arond 4 hours, I lost a bit of time redoing the email service, but it was time well spent, also the deployment and the video is outside this timeline.

## 🚧 Challenges Faced

1. **Email Service Configuration**: Setting up Gmail SMTP with app passwords required understanding Google's 2-factor authentication and app password generation process.

2. **Type Safety**: Trying to maintaining proper TypeScript types between frontend and backend

3. **Tailwind v4.0**: Using Tailwind with Postcss


## 👨‍💻 Author

ENGLAN MUCA

