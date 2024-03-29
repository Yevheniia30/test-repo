import axios from 'axios';
import authInstance from './authApi1';

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

// ==========================8 module
export const getGoods = () => {
  return authInstance('/products');
};

export const addGood = async data => {
  const { data: result } = await authInstance.post('/products', data);
  return result;
};

export const deleteGood = async id => {
  await authInstance.delete(`/products/${id}`);
  return id;
};

export const checkDeleted = data => {
  return instance.put(`/cart/${data.id}`, data);
};
