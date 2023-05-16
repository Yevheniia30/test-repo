import { ADD_USER, FILTER_USER, REMOVE_USER } from './actionTypes';
import { nanoid } from 'nanoid';

import { createAction } from '@reduxjs/toolkit';

// типи зберігаються всередині самих ф-цій
// тому можна видалити файли з типами

// якщо потрібно додати айді або зробити ще якусь дію, другим аргументом в createAction передаємо функцію. яка приймає пейлоад, і повертає пейлоад з доданим айді

export const fetchUsersLoading = createAction('users/fetch/loading');
export const fetchUsersSucces = createAction('users/fetch/success');
export const fetchUsersError = createAction('users/fetch/error');

export const addUsersLoading = createAction('users/add/loading');
export const addUsersSucces = createAction('users/add/success');
export const addUsersError = createAction('users/add/error');

export const removeUsersLoading = createAction('users/remove/loading');
export const removeUsersSucces = createAction('users/remove/success');
export const removeUsersError = createAction('users/remove/error');

export const addUser = createAction('ADD_USER', payload => ({
  payload: {
    ...payload,
    id: nanoid(6),
  },
}));
console.log('addUser', [addUser]);
export const removeUser = createAction('REMOVE_USER');

// export const addUser = payload => {
//   return {
//     type: ADD_USER,
//     payload,
//   };
// };

// export const addUser = payload => {
//   return {
//     type: ADD_USER,
//     payload: {
//       id: nanoid(),
//       ...payload,
//     },
//   };
// };

// export const removeUser = payload => {
//   return {
//     type: REMOVE_USER,
//     payload,
//   };
// };

// export const filterUser = payload => {
//   return {
//     type: FILTER_USER,
//     payload,
//   };
// };
