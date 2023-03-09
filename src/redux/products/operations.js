import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProducts,
  addToCart,
  deleteFromCart,
  getCart,
  changeQuantity,
  getGoods,
  addGood,
} from 'services/productsApi';
import {
  fetchProductsLoading,
  fetchProductsError,
  fetchProductsSuccess,
  addToCartError,
  addToCartLoading,
  addToCartSuccess,
  deleteFromCartLoading,
  deleteFromCartSuccess,
  deleteFromCartError,
  fetchCartLoading,
  fetchCartSuccess,
  fetchCartError,
} from './actions';

export const fetchProductsThunk = createAsyncThunk(
  'products/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getProducts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// функція яка повертає функцію
export const fetchProducts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchProductsLoading());
      const { data } = await getProducts();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsError(error.message));
    }
    // dispatch(fetchProductsLoading());
    // getProducts()
    //   .then(({ data }) => {
    //     fetchProductsSuccess(data);
    //   })
    //   .catch(err => {
    //     fetchProductsError(err);
    //   });
  };
  return func;
};

const isDublicate = ({ name }, cart) => {
  console.log('data', name, cart);
  // const normalizedTitle = name.toLowerCase();
  const isAdded = cart.find(item => item.name === name);
  return isAdded;
};

export const fetchCart = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchCartLoading());
      const { data } = await getCart();
      dispatch(fetchCartSuccess(data));
    } catch (error) {
      dispatch(fetchCartError(error.message));
    }
  };
  return func;
};

export const addToCartThunk = createAsyncThunk(
  'cart/add',
  async (data, { rejectWithValue }) => {
    try {
      const dataWithQuantity = { ...data, quantity: 1 };
      const { data: result } = await addToCart(dataWithQuantity);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (data, { getState }) => {
      console.log(getState());
      const { cart } = getState();
      if (isDublicate(data, cart.cart)) {
        console.log('isDublicate');
        alert(`${data.name} isalredy in the cart`);
        return false;
      }
    },
  }
);

// export const addToCartFunc = data => {
//   const func = async (dispatch, getState) => {
//     try {
//       const { cart } = getState();
//       if (isDublicate(data, cart.cart)) {
//         return alert(`${data.title} isalredy in the cart`);
//       }
//       const productWithQuantity = { ...data, quantity: 1 };
//       dispatch(addToCartLoading());
//       const { data: result } = await addToCart(productWithQuantity);
//       // const newRes = {
//       //   ...result,
//       //   quantity: 1,
//       // };
//       dispatch(addToCartSuccess(result));
//     } catch (error) {
//       dispatch(addToCartError(error.message));
//     }
//   };
//   return func;
// };

export const deleteFromCartFunc = id => {
  const func = async dispatch => {
    try {
      dispatch(deleteFromCartLoading());
      await deleteFromCart(id);
      dispatch(deleteFromCartSuccess(id));
    } catch (error) {
      dispatch(deleteFromCartError(error.message));
    }
  };
  return func;
};

export const changeQuantityThunk = createAsyncThunk(
  'cart/quantity',
  async ({ data, add }, { rejectWithValue }) => {
    try {
      const updItem = { ...data, quantity: add ? data.quantity + 1 : data.quantity - 1 };
      console.log('updItem', updItem);
      const { data: result } = await changeQuantity(updItem);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ==============8  module=================
export const fetchGoods = createAsyncThunk('goods/fetch', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getGoods();
    return data;
  } catch ({ response }) {
    return rejectWithValue(response.data.message);
  }
});

export const addGoods = createAsyncThunk('goods/add', async (data, { rejectWithValue }) => {
  try {
    const { data: result } = await addGood(data);
    return result;
  } catch ({ response }) {
    return rejectWithValue(response.data.message);
  }
});
