import { ADD_USER, FILTER_USER, REMOVE_USER } from './actionTypes';
import { nanoid } from 'nanoid';

import { createAction } from '@reduxjs/toolkit';

// типи зберігаються всередині самих ф-цій
// тому можна видалити файли з типами

// якщо потрібно додати айді або зробити ще якусь дію, другим аргументом в createAction передаємо функцію. яка приймає пейлоад, і повертає пейлоад з доданим айді
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
