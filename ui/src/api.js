import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const fetchProcesses = () => {
  return axios.get(`${baseUrl}/processes`);
}

export const createProcess = (name) => {
  return axios.post(`${baseUrl}/processes`, {
    name,
  });
}

export const removeProcess = (id) => {
  return axios.delete(`${baseUrl}/processes/${id}`);
}
