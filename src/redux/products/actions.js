import { ADD_PRODUCT, GET_PRODUCT } from './types';

export const addProduct = payload => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

export const getProduct = payload => {
  return {
    type: GET_PRODUCT,
    payload,
  };
};
