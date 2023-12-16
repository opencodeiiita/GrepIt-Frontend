import React, { useContext, createContext } from 'react';

const AuthContext = createContext();

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
   };

   const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
      // Check if the token exists in localStorage
      const token = localStorage.getItem('token');
      return token ? true : false;
    });
   
    // This function will be used to update the authentication status
    const login = (token) => {
      localStorage.setItem('token', token);
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
