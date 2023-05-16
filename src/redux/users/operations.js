import { getUsers, addUsers, removeUsers, editUser } from 'services/usersApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchUsersError,
  fetchUsersLoading,
  fetchUsersSucces,
  addUsersLoading,
  addUsersSucces,
  addUsersError,
} from './actions';

// асинхронні екшени
// якщо потрібно робити асинронний запит, то екшен має повернути не об'єкт (як це робить звичайний екшен, а функцію, яка робить запит на бекенд. Тому що якщо екшен поверне об'єкт, то він відправиться одразу в редюсер і відповіді не буде). Тому створюємо такі екшени і називаємо їх операцями
// тому коли ми в компоненті викликаємо наприклад цей фетч, він не повертає нам об'єкт, а повертає функцію, яка робить запит на бекенд, відповідно, ми передаємо цю функцію в діспатч, діспатч передає її в редакс-санк, редакс-санк перевіряє чи це об'єкт чи функція, бачить що це функція і не передає її редюсеру(як це було б зі звичайним екшеном), а викликає і передає їй діспатч, і далі вже функція передає екшени лоадінг і тд в редюсер

// createAsynkThunk скорочує код і полегшує роботу з слайсами
// вона створює одночасно операцїю і три екшени під кожну стадію запиту(pending, fullfilled, rejected), першим агруменотом приймає назву дії яку робимо, другим об'єкт thunkAPI, третім можна предати умову
export const fetchUsers = createAsyncThunk('users/fetch', async (_, thunkAPI) => {
  try {
    const data = await getUsers();
    return data;
  } catch (error) {
    // rejectwithvalue генерує пейлоад
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addUserFunc = createAsyncThunk(
  'users/add',
  async (user, { rejectWithValue }) => {
    try {
      const data = await addUsers(user);
      return data;
    } catch (error) {
      // rejectwithvalue генерує пейлоад помилки
      return rejectWithValue(error.message);
    }
  },

  {
    // якщо кондішн поверне фолс то операція не виконається
    condition: (user, { getState }) => {
      const { users } = getState();
      if (isDuplicate(user, users.users).nameRes) {
        alert(`${user.name} is already exists`);
        return false;
      }
      if (isDuplicate(user, users.users).phoneRes) {
        alert(`${user.number} is already exists`);
        return false;
      }
    },
  }
);

export const removeUser = createAsyncThunk('users/remove', async (id, thunkAPI) => {
  try {
    const data = await removeUsers(id);
    return data;
  } catch (error) {
    // rejectwithvalue генерує пейлоад
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  'users/update',
  async ({ id, user }, { rejectWithValue }) => {
    try {
      const data = await editUser(id, user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchUsers = () => {
//   // повідомляємо що запит пішов
//   const func = async dispatch => {
//     // dispatch(fetchUsersLoading());

//     // якщо запит успішний в редюсер  передаємо дані, а якщо ні то помилку

//     // getUsers()
//     //   .then(data => {
//     //     fetchUsersSucces(data);
//     //   })
//     //   .catch(error => {
//     //     fetchUsersError(error);
//     //   });

//     try {
//       dispatch(fetchUsersLoading());

//       const data = await getUsers();
//       dispatch(fetchUsersSucces(data));
//     } catch (error) {
//       dispatch(fetchUsersError(error.message));
//     }
//   };
//   return func;
// };

const isDuplicate = (user, users) => {
  const nameRes = users.find(item => item.name === user.name);
  const phoneRes = users.find(item => item.number === user.number);

  return { nameRes, phoneRes };
};

// export const addUserFunc = user => {
//   // функція гетстейт повертає наш стейт
//   // console.log('getState', getState());

//   const func = async (dispatch, getState) => {
//     const { users } = getState();
//     // console.log('=========isDuplicate', isDuplicate(user, users.users));

//     if (isDuplicate(user, users.users).nameRes) {
//       return alert(`${user.name} is already exists`);
//     }
//     if (isDuplicate(user, users.users).phoneRes) {
//       return alert(`${user.phone} is already exists`);
//     }

//     try {
//       dispatch(addUsersLoading());
//       const data = await addUsers(user);
//       dispatch(addUsersSucces(data));
//     } catch (error) {
//       dispatch(addUsersError(error.message));
//     }
//   };
//   return func;
// };
