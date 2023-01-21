import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62eebbae8d7bc7c2eb71c14b.mockapi.io/api/v1/users',
});

export const getUsers = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addUsers = async user => {
  const { data } = await instance.post('/', user);
  return data;
};

export const removeUsers = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};

export const editUser = async (id, user) => {
  const { data } = await instance.put(`/${id}`, user);
  return data;
};
