import axios from 'axios';
import { getTokenLocalStorage } from '../auth';

export const BASE_URL = 'http://localhost:8080';

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
  // timeout: 10000,
  // headers: {
  //   'Content-Type': 'application/json',
  // }
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getTokenLocalStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

