import { createStore, combineReducers } from 'redux';
//
import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { searchProducts } from './products/actions';
import { ADD_PRODUCT, REMOVE_PRODUCT, SEARCH_PRODUCT } from './products/types';
import productReducer from './products/slice';
// by createReducer
// import { productsReducer } from './products/reducer';
// by createSlice
import productsReducer from './products/reducer';
import { basketReducer } from './products/reducer';
import { addToCartError, addToCartLoading, addToCartSuccess } from './products/actions';

// const reducer = (store = initialStore, action) => {
//   switch (action.type) {
//     case ADD_PRODUCT:
//       // мутувати стор не можна тому не можна пуш
//       //   store.basket.push(action.payload);
//       // потрібно повернути новий об'єкт кстор
//       return { ...store, basket: [...store.basket, action.payload] };
//     case REMOVE_PRODUCT:
//       const updProducts = store.basket.filter(i => i.id !== action.payload);
//       return { ...store, basket: updProducts };
//     case SEARCH_PRODUCT:
//       return { ...store, search: action.payload };
//     default:
//       return store;
//   }
//   //   console.log(store);
// };

// 2 reducers
// const basketReducer = (store = [], action) => {
//   switch (action.type) {
//     case ADD_PRODUCT:
//       // мутувати стор не можна тому не можна пуш
//       //   store.basket.push(action.payload);
//       // потрібно повернути новий об'єкт кстор
//       return [...store, action.payload];
//     case REMOVE_PRODUCT:
//       const updProducts = store.filter(i => i.id !== action.payload);
//       return updProducts;
//     default:
//       return store;
//   }
// };

// const searchReducer = (store = '', action) => {
//   switch (action.type) {
//     case SEARCH_PRODUCT:
//       return action.payload;
//     default:
//       return store;
//   }
// };

// reducers by toolkit
// createReducer першим аргументом приймає початковий стан, а другим об'єкт, в якому кожна властивість об'єкту це якась дія. Кожна властивість це функція яка приймає стор та екшен і повертає оновлений стан

//взявши назву екшена в квадратні дужки, ми отримуємо ...
// immer огортає редюсер і попереджає мутації, тобто якщо нічого не повертається то іммер відловлює мутацію і перетворює її на нормальне повернення

const searchReducer = createReducer('', {
  [searchProducts]: (_, action) => action.payload,
});

const rootReducer = combineReducers({
  // задача 2
  products: basketReducer,
  // products: {
  //   basketReducer,
  //   searchReducer,
  // },
  // cart: basketReducer,
  // search: searchReducer,
});

// const storage = createStore(
//   //   reducer,

//   // rootReducer,
//   productReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const persistConfig = {
  key: 'products',
  storage,
  whitelist: ['cart'],
};

// const persistedReducer = persistReducer(persistConfig, productReducer);
const persistedReducer = persistReducer(persistConfig, basketReducer);

export const storage1 = configureStore({
  // reducer: {
  //   cart: basketReducer,
  //   search: searchReducer,
  // },
  // reducer: productReducer,
  reducer: { cart: persistedReducer, products: productsReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(storage1);

// export default storage1;

// console.log(storage.getState());
