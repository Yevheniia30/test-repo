import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/photos',
  //   params: {
  // _limit: 12,
  // API: 'gufier56565654h5r',
  //   },
});

export const fetch = async (page = 1, q, limit = 12, sort = 'title') => {
  const params = { _page: page, _sort: sort, _limit: limit };
  if (q) params.q = q;
  const { data } = await instance('/', {
    params,
    // params: {
    //   _page: page,
    //   _sort: sort,
    //   _limit: limit,
    // },
  });
  return data;
};
