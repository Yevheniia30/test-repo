import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63f23159aab7d0912503b12f.mockapi.io',
});

export const getProducts = () => {
  return instance('/products');
};

export const getCart = () => {
  return instance('/cart');
};

export const addToCart = data => {
  return instance.post('/cart', data);
};
