// AuthContext.js - Context for managing authentication state
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        console.log(`printing token (in useEffect): ${token}`);
    }, [token]);

    const login = (userToken) => {
        setToken(userToken);
        console.log(`printing token ${userToken}`);
        console.log(`printing token ${token}`);
        // Additional logic after login if needed
    };

    const logout = () => {
        setToken(null);
        // Additional logic after logout if needed
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
