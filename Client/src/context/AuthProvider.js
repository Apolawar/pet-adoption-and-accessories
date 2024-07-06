import React, { createContext, useContext, useState } from 'react';

// Create authentication context
export const AuthContext = createContext();

// AuthProvider component
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("authUser");
  const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
