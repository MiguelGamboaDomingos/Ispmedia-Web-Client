import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const navigate = useNavigate();

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrUser(res.data)
  };

  const logout = () => {
    setCurrUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
  }, [currUser]);

  return (
    <AuthContext.Provider value={{ currUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
