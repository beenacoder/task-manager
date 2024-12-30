import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


//   useEffect(() => {
//     const fetchUserName = async () => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         try {
//           const user = await getUserProfile(token);
//           setUserName(user.name);
//         } catch {
//           setUserName(null); // Si el token no es válido
//         }
//       }
//     };

//     fetchUserName();
    
//   }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name"); // Limpiar otros datos de usuario si es necesario
    navigate("/login");
  };

  return (
    <header className="bg-transparent text-white py-4">
      <div className="container w-11/12 mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Task Manager
        </Link>
        <div>
          {token ? (
            <div className="flex items-center space-x-4">
              <span>Hola, {localStorage.getItem('name') || "Usuario"}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className="space-x-4">
              <Link
                to="/login"
                className=" px-4 py-2 hover:underline"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className=" px-4 py-2 rounded hover:underline"
              >
                Registrarse
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

