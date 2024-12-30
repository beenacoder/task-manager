import axios from 'axios';

const token = localStorage.getItem('token');
const api = axios.create({
  baseURL: 'https://task-manager-3nmq.onrender.com', 
    headers: { Authorization: `Bearer ${token}` },
  }
);

export default api;
