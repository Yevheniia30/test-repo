import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const getHeroes = page => {
  return instance('/people', { params: { page } });
};
