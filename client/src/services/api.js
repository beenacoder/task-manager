import axios from 'axios';

const token = localStorage.getItem('token');
const api = axios.create({
  baseURL: VITE_BACKEND_URL, 
    headers: { Authorization: `Bearer ${token}` },
  }
);

export default api;
