import axios from 'axios';

const backend = axios.create({
  baseURL: 'http://localhost:8081/',
  // baseURL: 'http://localhost:5000/',
});

const as = axios.create({
  baseURL: 'http://localhost:8080/',
  // baseURL: 'http://localhost:5000/',
});

export {as, backend};