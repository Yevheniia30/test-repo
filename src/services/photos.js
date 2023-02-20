import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/photos',
  //   params: {
  // _limit: 12,
  // API: 'gufier56565654h5r',
  //   },
});

export const fetch = async (page = 1, limit = 12) => {
  const { data } = await instance('/', {
    params: {
      _page: page,
      //   _limit: limit,
    },
  });
  return data;
};
