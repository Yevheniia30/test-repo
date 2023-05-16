import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// https://62eebbae8d7bc7c2eb71c14b.mockapi.io/api/v1/users

// import { usersReducer } from './users/reducer';
// редюсер із слайса
import usersReducer from './users/usersSlice';
import { filterReducer } from './filter/reducer';
import authReducer from './auth/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// створюємо об'єкт налаштувань персіст конфіг
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
// створюємо функцію-обгортку для редюча=ера
// персістредюсер зберігає в локалсторейдж кожного разу коли змінюється стор редюсера який в нього передали
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    users: usersReducer,
    // users: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// створюємо змінну і огортаєм наш стор персістором
// export const persistor = persistStore(store);

// щоб коректно працював персіст, або огортаємо персістом весь стор, або робимо початковий стан колекції не масивом, а об'єктом, тому що пересіст не застосовується до масива

// const reducer = combineReducers({
//   users: usersReducer,
//   filter: filterReducer,
// });

// export const store = configureStore({
//   reducer: {

//   },
// });

// import { ADD_USER, REMOVE_USER } from './actionTypes';

// import { reducer } from './reducer';

// export const initialStore = {
//   users: [
//     // {
//     //   id: 123,
//     //   name: 'qwerty',
//     //   phone: '123456789',
//     // },
//   ],
// };

// const reducer = store => {
//   return store;
// };

// const reducer = (store = initialStore, action) => {
//   switch (action.type) {
//     case ADD_USER:
//       // return {..store, users: [...store.users, action.payload]}
//       return { ...store, users: [...store.users, action.payload] };
//     //   break;
//     case REMOVE_USER:
//       return { ...store, users: store.users.filter(item => item.id !== action.payload) };

//     default:
//       return store;
//   }
//   //   return store;
// };

// створюємо стор - змінуу, яка викликає createStore, він першим аргументом приймає редюсер, а другим - початковий стан
// export const store = createStore(reducer, initialStore);

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// console.log('store', getState(store));
