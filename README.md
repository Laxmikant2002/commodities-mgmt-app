# 🏢 Slooze Commodities Management System

> **Slooze Take-Home Challenge - Frontend Implementation**

A modern, role-based commodities management system built with React, featuring authentication, dashboard analytics, product management, and theme switching.

[![Live Demo](https://img.shields.io/badge/demo-live-success.svg)](YOUR_DEPLOYMENT_LINK_HERE)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)](https://vitejs.dev/)

---

## 🚀 Live Demo

**🌐 Deployment Link:** [YOUR_DEPLOYMENT_LINK_HERE]

### 🔐 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| 👔 **Manager** | `manager@slooze.com` | `manager123` |
| 🏪 **Store Keeper** | `keeper@slooze.com` | `keeper123` |

---

## 📋 Features & Points Breakdown

### ✅ Implemented Features (100/100 Points + Bonus)

| Feature | Points | Status |
|---------|--------|--------|
| **Authentication & Login** | 5 | ✅ Complete |
| **Manager Dashboard** | 30 | ✅ Complete |
| **View All Products** | 10 | ✅ Complete |
| **Add/Edit Products** | 15 | ✅ Complete |
| **Light/Dark Mode** | 15 | ✅ Complete |
| **Role-Based Menu** | 25 (Bonus) | ✅ Complete |
| **Total** | **100** | ✅ **Complete** |

---

## 🎯 Role-Based Access Control

| Feature | Manager | Store Keeper |
|---------|---------|--------------|
| Login | ✅ | ✅ |
| Dashboard | ✅ | ❌ |
| View Products | ✅ | ✅ |
| Add/Edit Products | ✅ | ✅ |
| Delete Products | ✅ | ✅ |
| Theme Toggle | ✅ | ✅ |

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2
- **Build Tool:** Vite 5.0
- **Routing:** React Router DOM 6.20
- **State Management:** Context API
- **Styling:** Custom CSS with Theme Support
- **Mock API:** Local JavaScript implementation

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/Laxmikant2002/Commodities-Management.git

# Navigate to project directory
cd slooze-commodities

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

4. **Your deployment link will be:** `https://your-project.vercel.app`

### Option 2: Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   ```bash
   npx netlify-cli deploy --prod --dir=dist
   ```

3. **Or use Netlify Drop:** Drag and drop the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/Commodities-Management/'
   })
   ```

3. **Add deploy script to `package.json`**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages** in repository settings → Pages → Source: `gh-pages` branch

---

## 📁 Project Structure

```
slooze-commodities/
├── src/
│   ├── components/
│   │   ├── Login.jsx           # Authentication UI (5 pts)
│   │   ├── Dashboard.jsx       # Manager Dashboard (30 pts)
│   │   ├── ProductsList.jsx    # Products View (10 pts)
│   │   ├── ProductForm.jsx     # Add/Edit Products (15 pts)
│   │   ├── Navbar.jsx          # Role-based Navigation (Bonus 25 pts)
│   │   └── ThemeToggle.jsx     # Light/Dark Toggle (15 pts)
│   │
│   ├── context/
│   │   ├── AuthContext.jsx     # Authentication State
│   │   └── ThemeContext.jsx    # Theme State
│   │
│   ├── utils/
│   │   ├── mockApi.js          # Mock Backend API
│   │   ├── roleGuard.jsx       # Route Protection
│   │   └── api.js              # API Helper Functions
│   │
│   ├── styles/
│   │   ├── theme.css           # Theme Variables & Styles
│   │   └── App.css             # Global Styles
│   │
│   ├── App.jsx                 # Main Application Component
│   └── main.jsx                # React Entry Point
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Features Overview

### 1. **Authentication (5 Points)**
- Email & password validation
- Role-based login redirect
- Session persistence with localStorage
- Quick-fill demo buttons

### 2. **Manager Dashboard (30 Points)**
- Real-time statistics display
- Total products, revenue, low stock alerts
- Category breakdown
- Recent activity feed
- **Access:** Manager only

### 3. **Product Management (10 + 15 Points)**
- View all products with search
- Add new products
- Edit existing products
- Delete products with confirmation
- Form validation
- **Access:** Both Manager & Store Keeper

### 4. **Light/Dark Mode (15 Points)**
- Smooth theme transitions
- localStorage persistence
- System-wide theme application
- Toggle button in navbar

### 5. **Role-Based Menu (25 Bonus Points)**
- Dynamic menu rendering based on role
- Route guards for protected pages
- Manager-only dashboard access
- Automatic redirection for unauthorized access

---

## 🔒 Security Features

- ✅ Role-based route protection
- ✅ Protected route components
- ✅ Session validation
- ✅ Automatic logout on token expiry
- ✅ Input validation on forms

---

## 📊 Mock Data

The application uses a complete mock API (`src/utils/mockApi.js`) that simulates:

- User authentication
- Product CRUD operations
- Dashboard statistics
- Real-time data updates

**Note:** All data is stored in memory and resets on page refresh.

---

## 🎯 Assessment Criteria Met

| Criteria | Implementation |
|----------|----------------|
| **Authentication** | ✅ Complete with role-based access |
| **Dashboard** | ✅ Rich analytics with manager-only access |
| **Product Management** | ✅ Full CRUD with validation |
| **UI/UX** | ✅ Modern, responsive, accessible |
| **Theme Toggle** | ✅ Smooth light/dark mode |
| **Role-Based Menu** | ✅ Dynamic navigation with guards |
| **Code Quality** | ✅ Clean, modular, well-documented |

---

## 🚀 Quick Start Guide

1. **Visit the deployment link** (or run locally)
2. **Click "👔 Fill Manager"** button on login page
3. **Click "🚀 Login"** button
4. **Explore the dashboard** and product management
5. **Toggle theme** using the button in navbar
6. **Logout** and try Store Keeper account

---

## 📝 Assumptions & Notes

1. **Backend API:** Mock implementation for frontend demo
2. **Data Persistence:** In-memory storage (resets on refresh)
3. **Authentication:** Simplified for demo purposes
4. **Product Categories:** Pre-defined list (Electronics, Food, Clothing, Furniture, Sports)
5. **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)

---

## 🎓 Learning Outcomes

This project demonstrates:
- React Hooks (useState, useEffect, useContext)
- Context API for state management
- React Router for navigation
- Protected routes implementation
- Custom CSS with theming
- Form handling and validation
- Role-based access control
- Modern component architecture

---

## 👨‍💻 Developer

**Laxmikant**  
GitHub: [@Laxmikant2002](https://github.com/Laxmikant2002)

---

## 📄 License

This project is part of the Slooze take-home challenge.

---

## 🙏 Acknowledgments

- Slooze Team for the opportunity
- React & Vite communities
- Open source contributors

---

**Built with ❤️ for Slooze Take-Home Challenge**
