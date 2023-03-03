import { createStore } from 'redux';
import { ADD_PRODUCT, GET_PRODUCT } from './products/types';

const initialStore = {
  products: [],
  basket: [],
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...store, products: action.payload };
    case ADD_PRODUCT:
      // мутувати стор не можна тому не можна пуш
      //   store.basket.push(action.payload);
      // потрібно повернути новий об'єкт кстор
      return { ...store, basket: [...store.basket, action.payload] };
    default:
      return store;
  }
  //   console.log(store);
};

const storage = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default storage;

console.log(storage.getState());
