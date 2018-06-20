import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const fetchProcesses = () => {
  return axios.get(`${baseUrl}/processes`);
}
