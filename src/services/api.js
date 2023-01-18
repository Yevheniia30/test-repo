import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (page = 1, limit = 8) => {
  const res = await axios.get('/posts', {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  return res.data;
};

export const getPostsSearch = async (query, page = 1, limit = 8) => {
  const res = await axios.get('/posts', {
    params: {
      _page: page,
      _limit: limit,
      q: query,
    },
  });
  return res.data;
};

export const getPost = async id => {
  const res = await axios.get(`/posts/${id}`);
  return res.data;
};

export const getComments = async id => {
  const res = await axios.get(`/posts/${id}/comments`);
  return res.data;
};

export const getUser = async () => {
  const res = await axios.get('/users');
  return res.data;
};

export const addUser = async user => {
  const res = await axios.post('/users', user);
  return res.data;
};

export const deleteUser = async id => {
  const res = await axios.delete(`/users/${id}`);
  return res.data;
};

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   params: {
//     image_type: 'photo',
//     orientation: 'horizontal',
//     perPage: '12',
//   },
// });

// axios.defaults.baseURL = 'https://pixabay.com/api';
// const key = '16825213-7fb8f93f8fb61dc742d5122ac';

// export const getImagesReq = async () => {
//   const { data } = await instance.get(`/?q=cat&page=1&key=${key}`);
//   console.log('data, ', data);
//   return data;
// };

// export const getImagesReq1 = async () => {
//   const { data } = await instance.get(`/`, {
//     params: {
//       searchQuery: '',
//       page: 1,
//       key,
//     },
//   });
//   console.log('data');
//   return data;
// };
