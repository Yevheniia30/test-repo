import axios from 'axios';
import { instance } from './authApi';

// const instance = axios.create({
//   // baseURL: 'https://62eebbae8d7bc7c2eb71c14b.mockapi.io/api/v1/users',
//   baseURL: 'https://connections-api.herokuapp.com/contacts',
// });

export const getUsers = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addUsers = async user => {
  const { data } = await instance.post('/contacts', user);
  return data;
};

export const removeUsers = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const editUser = async (id, user) => {
  const { data } = await instance.patch(`/contacts/${id}`, user);
  return data;
};
