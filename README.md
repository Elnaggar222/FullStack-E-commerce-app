# 🛒 E-Commerce App

![React](https://img.shields.io/badge/React-18.0.0-blue?style=flat&logo=react) 
![TypeScript](https://img.shields.io/badge/TypeScript-4.5.4-blue?style=flat&logo=typescript) 
![Vite](https://img.shields.io/badge/Vite-4.0.0-purple?style=flat&logo=vite) 
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-%2323193F?style=flat&logo=chakraui) 
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-%23764ABC?style=flat&logo=redux) 
![Strapi](https://img.shields.io/badge/Strapi-%23703BEB?style=flat&logo=strapi)

## 🚀 Project Overview
An E-Commerce application built using **React, TypeScript, and Vite**, integrated with **Strapi** as a backend CMS. The app provides users with a seamless shopping experience, including product listings, a detailed product page, cart management, authentication, and more!

## 📌 Features
### 🌟 Core Features
- **Products Page** 📦: Displays all available products.
- **Product Details Page** 🔍: Provides detailed information about a product.
- **Cart Page** 🛒: Users can view, add, and manage items in their cart.
- **Authentication** 🔑: Users can sign up, sign in, and stay logged in.
- **Protected Routes** 🔒: Ensures only authenticated users can access certain pages.
- **Responsive UI** 📱: Designed with Chakra UI for a smooth experience on all devices.
- **Light & Dark Mode** 🌗: Users can switch between themes for better accessibility.

### ⚙️ Tech Stack & Tools
- **React + TypeScript** 🚀
- **Vite** ⚡️ for fast development
- **Redux Toolkit** 🛠️ for state management
- **React Router** 🚦 for navigation
- **Chakra UI** 🎨 for styling
- **TanStack Query** 🔄 for efficient data fetching
- **Axios** 📡 for API calls
- **Strapi** 🏗️ for backend API generation
- **React Hook Form + Yup** ✅ for form validation
- **React Icons** 🎭 for beautiful icons

## 📄 Implementation Details
### 🎨 UI & Styling
- Chakra UI templates for a modern, responsive design.
- Navbar component with active NavLink animation and profile menu.
- Skeleton loaders for products and cart pages.
- Error handling UI with meaningful messages.
- **Light & Dark Mode** toggle for better user experience.

### 🔗 Routing & Authentication
- **React Router** for navigation across pages.
- **Protected Routes** to restrict access to authenticated users.
- **Redux-Persist** to persist user authentication status and local cart items.

### 🛍️ Cart Functionality
- **Authenticated Users**:
  - Each user has a **unique cart** stored in the database.
  - Can **add, delete, increase, and decrease product quantity**.
  - **Optimized loading state** for every cart operation.
  - Custom React Query hooks for fetching cart data.
- **Unauthenticated Users**:
  - Can add items to a **local cart stored in localStorage**.
  - Upon login, **local cart items merge with the user’s cart** in the database.

## 🎯 Future Enhancements
- Payment integration 💳
- Order history 📜
- Wishlist functionality ❤️
- Advanced filtering & sorting 📊

## 🛠️ Setup & Installation

### Clone the repository

```sh
git clone https://github.com/Elnaggar222/FullStack-E-commerce-app.git
cd FullStack-E-commerce-app
```

### Client Setup

```sh
cd client
npm install
npm run dev
```

### Backend Setup (Strapi)

```sh
cd backend
npm install
npm run develop
```

# Strapi Configuration

Note: Rename the `.env.example` file to `.env` and ensure all required environment variables are configured for Strapi. If your Strapi setup requires database configuration or admin login, be sure to follow the Strapi documentation to set up your default admin account and any other required configurations.

## 👨‍💻 Contributing
Feel free to submit issues, pull requests, or feature suggestions!

## 📜 License
This project is licensed under the **MIT License**.

---
Made with ❤️ using **React, TypeScript, Chakra UI & Strapi** ✨
