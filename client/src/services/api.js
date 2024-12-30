import axios from 'axios';
// const backendUrl = process.env.VITE_BACKEND_URL;
const token = localStorage.getItem('token');
const api = axios.create({
    baseURL: `https://task-manager-3nmq.onrender.com/api`, 
    headers: { Authorization: `Bearer ${token}` },
  }
);

export default api;
