import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://backend:5000/',
});

export default instance;
