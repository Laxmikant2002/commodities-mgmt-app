import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import ProductsList from './components/ProductsList.jsx';
import ProductForm from './components/ProductForm.jsx';
import Navbar from './components/Navbar.jsx';
import { ProtectedRoute } from './utils/roleGuard.jsx';
import './styles/theme.css';
import './styles/App.css';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute requiredRole="Dashboard">
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            
            <Route path="/products" element={<ProductsList />} />
            
            <Route path="/add-product" element={<ProductForm />} />
            
            <Route path="/edit-product/:id" element={<ProductForm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;