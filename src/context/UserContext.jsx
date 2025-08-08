import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  // Guardamos el token y email en localStorage cada vez que cambian
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }
  }, [token, email]);

  // Método para hacer login
  const login = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        setEmail(data.email);
      } else {
        throw new Error(data.message || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error en login:", error.message);
      throw error;
    }
  };

  // Método para registrarse
  const register = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        setEmail(data.email);
      } else {
        throw new Error(data.message || "Error al registrarse");
      }
    } catch (error) {
      console.error("Error en register:", error.message);
      throw error;
    }
  };

  // Método para cerrar sesión
  const logout = () => {
    setToken("");
    setEmail("");
  };

  // Método para obtener perfil
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("No se pudo obtener el perfil");
      return await res.json();
    } catch (error) {
      console.error("Error en getProfile:", error.message);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

