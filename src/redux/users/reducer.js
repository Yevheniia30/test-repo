// import { ADD_USER, FILTER_USER, REMOVE_USER } from './actionTypes';

import { createReducer } from '@reduxjs/toolkit';
import { addUser, removeUser } from './actions';

// import { initialStore } from './store';

// const initialStore = {
//   users: [],
//   filter: '',
// };

const initialStore = [];

// createReducer першим аргументом приймає початковий стан, а другим об'єкт, в якому кожна властивість об'єкту це якась дія. Кожна властивість це функція яка приймає стор та екшен і повертає оновлений стан

//взявши назву екшена в квадратні дужки, ми отримуємо ...

export const usersReducer = createReducer(initialStore, {
  // ADD_USER: () => {},
  // REMOVE_USER: () => {},
  // 'users/add': (store, action) => [...store, action.payload],
  // [addUser]: (store, action) => [...store, action.payload],
  [addUser]: (store, action) => {
    store.push(action.payload);
  },
  // 'users/remove': (store, action) => store.filter(item => item.id !== action.payload),
  [removeUser]: (store, action) => store.filter(item => item.id !== action.payload),
});

// export const usersReducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case ADD_USER:
//       // return {..store, users: [...store.users, action.payload]}
//       // return { ...store, users: [...store.users, action.payload] };
//       return [...store, payload];
//     case REMOVE_USER:
//       return store.filter(item => item.id !== payload);

//     // case FILTER_USER:
//     //   return { ...store, filter: action.payload };

//     default:
//       return store;
//   }
//   //   return store;
// };
