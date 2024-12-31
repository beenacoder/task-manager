import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://task-manager-3nmq.onrender.com/api';

const api = axios.create({
  baseURL: backendUrl
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && !config.url.includes('/users')) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
