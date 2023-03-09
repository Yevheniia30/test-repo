import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://auth-backend-lesson.herokuapp.com/api',
});

export const signup = async credentials => {
  const { data } = await instance.post('/users/signup', credentials);
  instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
  return data;
};

export const login = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
  return data;
};

export const logout = async () => {
  await instance.post('/users/logout');
  instance.defaults.headers.common.Authorization = '';
  //   return data;
};

export const current = async userToken => {
  try {
    instance.defaults.headers.common.Authorization = `Bearer ${userToken}`;
    const { data: result } = await instance.get('/users/current');
    return result;
  } catch (error) {
    instance.defaults.headers.common.Authorization = '';
    throw error;
  }
};

export default instance;
