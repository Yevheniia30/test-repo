import { ADD_PRODUCT, REMOVE_PRODUCT, SEARCH_PRODUCT } from './types';
import { createAction } from '@reduxjs/toolkit';

// в createAction передаємо тип екшена
export const addProduct = createAction('ADD_PRODUCT');
export const removeProduct = createAction('REMOVE_PRODUCT');
export const searchProducts = createAction('SEARCH_PRODUCT');

// ===========7 module 1 task==============
export const fetchProductsLoading = createAction('products/fetch/loading');
export const fetchProductsSuccess = createAction('products/fetch/success');
export const fetchProductsError = createAction('products/fetch/error');

export const addToCartLoading = createAction('cart/add/loading');
export const addToCartSuccess = createAction('cart/add/success');
export const addToCartError = createAction('cart/add/error');
// console.log(addProduct);

// export const addProduct = payload => {
//   return {
//     type: ADD_PRODUCT,
//     payload,
//   };
// };

// export const removeProduct = payload => {
//   return {
//     type: REMOVE_PRODUCT,
//     payload,
//   };
// };

// export const searchProducts = payload => {
//   return {
//     type: SEARCH_PRODUCT,
//     payload,
//   };
// };
