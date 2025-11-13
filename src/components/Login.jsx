import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { mockAuthAPI } from '../utils/mockApi';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    // Quick login function for demo
    const quickLogin = (role) => {
        if (role === 'manager') {
            setEmail('manager@slooze.com');
            setPassword('manager123');
        } else {
            setEmail('keeper@slooze.com');
            setPassword('keeper123');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            console.log('Attempting login with:', { email, password });
            
            // Using mock API instead of real backend
            const data = await mockAuthAPI.login({ email, password });
            
            console.log('Login successful:', data);

            login({
                email: data.email,
                role: data.role,
                token: data.token
            });

            // Small delay to ensure state is set
            setTimeout(() => {
                if (data.role === 'Manager') {
                    console.log('Redirecting to dashboard');
                    navigate('/dashboard');
                } else {
                    console.log('Redirecting to products');
                    navigate('/products');
                }
            }, 100);
            
        } catch (err) {
            console.error('Login error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>🏢 Commodities Management</h2>

                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                    <label htmlFor="email">📧 Email Address</label>
                    <input 
                        id="email"
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="password">🔒 Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? '⏳ Logging in...' : '🚀 Login'}
                </button>

                <div className="demo-credentials">
                    <p><strong>📝 Demo Accounts:</strong></p>
                    <p>👔 Manager: <strong>manager@slooze.com</strong> / <strong>manager123</strong></p>
                    <p>🏪 Store Keeper: <strong>keeper@slooze.com</strong> / <strong>keeper123</strong></p>
                    
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                        <button 
                            type="button" 
                            onClick={() => quickLogin('manager')}
                            style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem' }}
                        >
                            👔 Fill Manager
                        </button>
                        <button 
                            type="button" 
                            onClick={() => quickLogin('keeper')}
                            style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem' }}
                        >
                            🏪 Fill Store Keeper
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}