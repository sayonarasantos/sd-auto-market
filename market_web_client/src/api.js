import axios from 'axios';

const baseURL = process.env.API_BASE_URL || 'http://0.0.0.0:8000/api';

const api = axios.create({
  baseURL: baseURL
});

export default api;
