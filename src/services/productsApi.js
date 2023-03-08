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

export const deleteFromCart = id => {
  return instance.delete(`/cart/${id}`);
};

export const changeQuantity = data => {
  return instance.put(`/cart/${data.id}`, data);
};
