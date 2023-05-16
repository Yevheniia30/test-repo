import axios from 'axios';
// import { set } from 'date-fns';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(token) {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  token.set(result.token);
  //
  // instance.defaults.headers.common.authorization = `Bearer ${result.token}`;
  return result;
};
export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  token.set(result.token);
  // instance.defaults.headers.common.authorization = `Bearer ${result.token}`;

  return result;
};

export const logout = async () => {
  const { data: result } = await instance.post('/users/logout');
  token.unset();
  // instance.defaults.headers.common.authorization = '';
  return result;
};

// export const current = async authToken => {
//   console.log('token', token);
//   try {
//     token.set(authToken);
//     const { data } = await instance.get('/users/current');
//     return data;
//   } catch (error) {
//     token.unset();
//     throw error;
//   }
//   // token.set(token);
//   // const { data } = await instance.get('/users/current');
//   // return data;
// };

export const current = async authToken => {
  token.set(authToken);
  const { data } = await instance.get('/users/current');
  return data;
};
