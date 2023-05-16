import { createReducer, createSlice } from '@reduxjs/toolkit';
import { store } from 'redux/store';
import {
  addToCartError,
  addToCartLoading,
  addToCartSuccess,
  fetchProductsError,
  fetchProductsLoading,
  fetchProductsSuccess,
  addProduct,
  deleteFromCartError,
  deleteFromCartLoading,
  deleteFromCartSuccess,
  fetchCartError,
  fetchCartLoading,
  fetchCartSuccess,
  removeProduct,
} from './actions';
import {
  changeQuantityThunk,
  addToCartThunk,
  fetchProductsThunk,
  checkDeletedThunk,
} from './operations';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchProductsThunk.pending, (store, { payload }) => {
        store.loading = true;
      })
      .addCase(fetchProductsThunk.fulfilled, (store, { payload }) => {
        store.products = payload;
        store.loading = false;
      })
      .addCase(fetchProductsThunk.rejected, (store, { payload }) => {
        store.error = payload;
        store.loading = false;
      });
  },
});

// export const productsReducer = createReducer(initialState, {
//   [fetchProductsLoading]: store => {
//     // return { ...store, loading: true };
//     store.loading = true;
//   },
//   [fetchProductsSuccess]: (store, { payload }) => {
//     // return { ...store, products: [...payload] };
//     store.products = payload;
//     store.loading = false;
//   },
//   [fetchProductsError]: (store, { payload }) => {
//     // return { ...store, error: payload };
//     store.error = payload;
//     store.loading = false;
//   },
//   // // addtocart
//   // [addToCartLoading]: store => {
//   //   store.loading = true;
//   // },
//   // [addToCartSuccess]: (store, { payload }) => {
//   //   store.cart.push(payload);
//   //   store.loading = false;
//   // },
//   // [addToCartError]: (store, { payload }) => {
//   //   store.error = payload;
//   //   store.loading = false;
//   // },
// });

const initialStore = {
  //   products: [],
  cart: [],
  search: '',
  loading: false,
  error: null,
};

export const basketReducer = createReducer(initialStore, {
  // [addProduct]: (store, action) => [...store, action.payload],
  // [addProduct]: (store, action) => {
  //   store.push(action.payload);
  // },
  // [removeProduct]: (store, action) => store.filter(({ id }) => id !== action.payload),
  [fetchCartLoading]: store => {
    store.loading = true;
  },
  [fetchCartSuccess]: (store, { payload }) => {
    store.cart = payload;
    store.loading = false;
  },
  [fetchCartError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },
  // addtocart
  // [addToCartThunk.pending]: store => {
  //   store.loading = true;
  // },
  // [addToCartThunk.fulfilled]: (store, { payload }) => {
  //   // console.log(store.getState());
  //   store.cart.push(payload);
  //   store.loading = false;
  // },
  // [addToCartThunk.rejected]: (store, { payload }) => {
  //   console.log(store);
  //   store.error = payload;
  //   store.loading = false;
  // },
  [addToCartLoading]: store => {
    store.loading = true;
  },
  [addToCartSuccess]: (store, { payload }) => {
    console.log();
    store.cart.push(payload);
    store.loading = false;
  },
  [addToCartError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },
  [deleteFromCartLoading]: store => {
    store.loading = true;
  },
  [deleteFromCartSuccess]: (store, { payload }) => {
    store.cart = store.cart.filter(({ id }) => id !== payload);
    store.loading = false;
  },
  [deleteFromCartError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },
  // =======  change QUANTITYTY=============
  [changeQuantityThunk.fulfilled]: (store, { payload }) => {
    store.cart = store.cart.map(item => (item.id === payload.id ? payload : item));
  },
  // ============ check deleted==============
  [checkDeletedThunk.fulfilled]: (store, { payload }) => {
    store.cart = store.cart.map(item => (item.id === payload.id ? payload : item));
  },
});

export default productsSlice.reducer;
