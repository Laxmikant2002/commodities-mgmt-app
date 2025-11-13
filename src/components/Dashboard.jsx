import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { mockDashboardAPI } from '../utils/mockApi';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { user, isManager } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Role-based access control
    if (!isManager()) {
      navigate('/products');
      return;
    }

    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Using mock API instead of real backend
      const data = await mockDashboardAPI.getStats();
      setStats(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading dashboard...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="dashboard">
      <h1>Manager Dashboard</h1>
      <p>Welcome, {user?.email}</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p className="stat-value">{stats?.totalProducts || 0}</p>
        </div>

        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-value">${stats?.totalRevenue || 0}</p>
        </div>

        <div className="stat-card">
          <h3>Low Stock Items</h3>
          <p className="stat-value">{stats?.lowStockCount || 0}</p>
        </div>

        <div className="stat-card">
          <h3>Categories</h3>
          <p className="stat-value">{stats?.categoriesCount || 0}</p>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          {stats?.recentActivities?.map((activity, index) => (
            <li key={index}>
              <span>{activity.action}</span>
              <span>{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}