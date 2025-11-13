import { Navigate } from 'react-router-dom';

export const hasAccess = (requiredRole) => {
  const userRole = localStorage.getItem('role');
  
  const roleHierarchy = {
    'Manager': ['Dashboard', 'Products', 'AddProduct'],
    'Store Keeper': ['Products', 'AddProduct']
  };

  return roleHierarchy[userRole]?.includes(requiredRole) || false;
};

export const ProtectedRoute = ({ children, requiredRole }) => {
  if (!hasAccess(requiredRole)) {
    return <Navigate to="/products" replace />;
  }
  return children;
};