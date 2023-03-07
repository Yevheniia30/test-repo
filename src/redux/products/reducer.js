import { createReducer } from '@reduxjs/toolkit';
import { store } from 'redux/store';
import {
  addToCartError,
  addToCartLoading,
  addToCartSuccess,
  fetchProductsError,
  fetchProductsLoading,
  fetchProductsSuccess,
} from './actions';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = createReducer(initialState, {
  [fetchProductsLoading]: store => {
    // return { ...store, loading: true };
    store.loading = true;
  },
  [fetchProductsSuccess]: (store, { payload }) => {
    // return { ...store, products: [...payload] };
    store.products = payload;
    store.loading = false;
  },
  [fetchProductsError]: (store, { payload }) => {
    // return { ...store, error: payload };
    store.error = payload;
    store.loading = false;
  },
  // // addtocart
  // [addToCartLoading]: store => {
  //   store.loading = true;
  // },
  // [addToCartSuccess]: (store, { payload }) => {
  //   store.cart.push(payload);
  //   store.loading = false;
  // },
  // [addToCartError]: (store, { payload }) => {
  //   store.error = payload;
  //   store.loading = false;
  // },
});
