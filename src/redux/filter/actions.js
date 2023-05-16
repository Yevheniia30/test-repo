import { ADD_USER, FILTER_USER, REMOVE_USER } from './actionTypes';
import { nanoid } from 'nanoid';

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

export const filterUser = payload => {
  return {
    type: FILTER_USER,
    payload,
  };
};
