import axios from 'axios';

let axiosInstance;

const Client = () => {
  if (axiosInstance !== undefined) {
    return axiosInstance;
  }

  axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
  });

  return axiosInstance;
};

export default Client;
