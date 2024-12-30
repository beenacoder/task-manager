import axios from 'axios';
const backendUrl = process.env.VITE_BACKEND_URL;
const token = localStorage.getItem('token');
const api = axios.create({
    baseURL: `${backendUrl}/api`, 
    headers: { Authorization: `Bearer ${token}` },
  }
);

export default api;
