import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://task-manager-3nmq.onrender.com/api';

const api = axios.create({
  baseURL: backendUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized - Redirecting to login');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
