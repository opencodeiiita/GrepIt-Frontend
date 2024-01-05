import React, { useContext, createContext, useState } from 'react';

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if the token exists in localStorage
    return localStorage.getItem('token')?.startsWith('Bearer ') || false;
  });

  // This function will be used to update the authentication status
  const login = (token) => {
    localStorage.setItem('token', `Bearer ${token}`);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  // Provide the authentication status and the login function to the rest of the app
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
