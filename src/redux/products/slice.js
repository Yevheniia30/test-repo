import { createSlice } from '@reduxjs/toolkit';
import { store } from 'redux/store';

const initialState = {
  cart: [],
  search: '',
};

const productSlice = createSlice({
  name: 'products',
  //   initialState: [],
  initialState,
  reducers: {
    // мутація
    // addProduct: (store, { payload }) => {
    //   store.cart.push(payload);
    // },
    // запис який працює з чистим редакс
    // addProduct: (store, { payload }) => {
    //   return { ...store, cart: [...store.cart, payload] };
    // },
    // додаємо quantity
    addProduct: {
      reducer: (store, { payload }) => {
        store.cart.push(payload);
      },
      prepare: payload => ({
        payload: {
          ...payload,
          quantity: 1,
        },
      }),
    },
    // повернення
    removeProduct: (store, { payload }) => {
      store.cart = store.cart.filter(item => item.id !== payload);
    },
    // повернення
    searchProduct: (store, { payload }) => {
      store.search = payload;
    },
    addQuantity: (store, { payload }) => {
      store.cart = store.cart.map(item =>
        item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decrQuantity: (store, { payload }) => {
      store.cart = store.cart.map(item =>
        item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
  },
});

export default productSlice.reducer;
export const { addProduct, removeProduct, searchProduct, addQuantity, decrQuantity } =
  productSlice.actions;
