import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateToken = (userData) => {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ ...userData, exp: Date.now() + 3600000 }));
    const signature = btoa('mock-signature');
    return `${header}.${payload}.${signature}`;
  };

  const login = async (username, password) => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = {
      'admin': { username: 'admin', role: 'admin', name: 'Administrator' },
      'user': { username: 'user', role: 'user', name: 'Regular User' }
    };

    if (users[username] && password === 'password123') {
      const userData = users[username];
      const token = generateToken(userData);
      setUser({ ...userData, token });
      setIsLoading(false);
      return { success: true };
    }
    
    setIsLoading(false);
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};