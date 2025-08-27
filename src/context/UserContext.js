// src/context/UserContext.js
import React, { createContext, useState } from "react";

// 1- إنشاء Context
export const UserContext = createContext();

// 2- إنشاء Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
