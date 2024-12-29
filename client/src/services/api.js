import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // Cambia esto si usas un dominio diferente
});

export default API;
