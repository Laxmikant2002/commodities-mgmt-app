import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        const email = localStorage.getItem('email');

        if (token && role) {
            setUser({ email, role, token });
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('role', userData.role);
        localStorage.setItem('email', userData.email);
        setUser(userData);
    };

    const logout = () => {
        localStorage.clear();
        setUser(null);
    };

    const isManager = () => user?.role === 'Manager';
    const isStoreKeeper = () => user?.role === 'Store Keeper';

    return (
        <AuthContext.Provider value={{ user, login, logout, isManager, isStoreKeeper, loading }}>
            {children}
        </AuthContext.Provider>
    );
}