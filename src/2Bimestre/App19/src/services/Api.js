import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/r-api/?api=filmes',
});

export default Api;
