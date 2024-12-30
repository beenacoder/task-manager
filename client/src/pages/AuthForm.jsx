import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre Login y Registro
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '' });
    setError(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const endpoint = isLogin ? '/users/login' : '/users/register';
      const { data } = await api.post(endpoint, formData);

      if (isLogin) {
        // Guardar el token JWT en localStorage o en un estado global
        localStorage.setItem('token', data.token);
        navigate('/tasks');
      } else {
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        toggleForm(); // Cambiar al formulario de inicio de sesión
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Ocurrió un error. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
      </h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Tu nombre"
              required={!isLogin}
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Tu correo electrónico"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Tu contraseña"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all flex justify-center items-center gap-2"
          disabled={loading}
        >
          {loading && <span className="spinner-border animate-spin"></span>}
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </button>
      </form>
      <p className="text-center mt-4">
        {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}{' '}
        <button
          type="button"
          onClick={toggleForm}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          {isLogin ? 'Regístrate' : 'Inicia Sesión'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
