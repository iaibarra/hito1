// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { token, email, logout, getProfile } = useUser();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUserData(data);
      } catch (error) {
        console.error("Error al obtener perfil:", error.message);
        logout(); // Si falla, cerramos sesión
        navigate("/login");
      }
    };

    if (token) {
      fetchProfile();
    } else {
      navigate("/login");
    }
  }, [token]);

  return (
    <section>
      <h2>Perfil</h2>
      {userData ? (
        <div>
          <p>Email: {userData.email}</p>
          <button onClick={() => {
            logout();
            navigate("/login");
          }}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </section>
  );
};

export default Profile;
