import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { user, logout, isManager } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-brand">
        <h3>Slooze Commodities</h3>
      </div>

      <ul className="nav-menu">
        {/* Dashboard - Manager Only */}
        {isManager() && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}

        {/* Products - All Roles */}
        <li>
          <Link to="/products">Products</Link>
        </li>

        {/* Add Product - Manager & Store Keeper */}
        <li>
          <Link to="/add-product">Add Product</Link>
        </li>
      </ul>

      <div className="nav-actions">
        <span className="user-info">
          {user.email} ({user.role})
        </span>
        <ThemeToggle />
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
}