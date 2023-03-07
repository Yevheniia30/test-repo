import { getProducts, addToCart } from 'services/productsApi';
import {
  fetchProductsLoading,
  fetchProductsError,
  fetchProductsSuccess,
  addToCartError,
  addToCartLoading,
  addToCartSuccess,
} from './actions';

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

const isDublicate = ({ title }, cart) => {
  console.log('data', title, cart);
  const normalizedTitle = title.toLowerCase();
  const isAdded = cart.find(item => item.title.toLowerCase().includes(normalizedTitle));
  return isAdded;
};

export const addToCartFunc = data => {
  const func = async (dispatch, getState) => {
    // console.log('store', getState());

    try {
      const { cart } = getState();
      if (isDublicate(data, cart.cart)) {
        return alert(`${data.title} isalredy in the cart`);
      }
      dispatch(addToCartLoading());
      const { data: result } = await addToCart(data);
      const newRes = {
        ...result,
        quantity: 1,
      };
      dispatch(addToCartSuccess(newRes));
    } catch (error) {
      dispatch(addToCartError(error.message));
    }
  };
  return func;
};
