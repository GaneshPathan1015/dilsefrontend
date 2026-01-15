import axios from 'axios';

const axiosClient = axios.create({
  // baseURL: 'https://thecaratcasa.com/api',
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});


export default axiosClient;
