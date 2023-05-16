import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchUsers, addUserFunc, removeUser, updateUser } from './operations';

// import { store } from 'redux/store';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

// викликаємо creteslice, він приймає об'єкт налаштувань
const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  //   в об'єкті редюсер перелічуємо всі редюсери
  //   вбудована бібліотека immer дозволяє мутувати стан
  extraReducers: {
    // "users/fetch/pending"
    [fetchUsers.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchUsers.fulfilled]: (store, { payload }) => {
      console.log('payload fetch', payload);
      store.loading = false;
      store.users = payload;
    },
    [fetchUsers.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    //
    [addUserFunc.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addUserFunc.fulfilled]: (store, { payload }) => {
      // console.log('payload fetch', payload);
      store.loading = false;
      store.users.push(payload);
    },
    [addUserFunc.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    //
    [removeUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.users = store.users.filter(i => i.id !== payload.id);
    },
    [removeUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    //
    [updateUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [updateUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.users = store.users.map(item => (item.id === payload.id ? payload : item));
    },
    [updateUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },

  reducers: {
    // add: (store, { payload }) => [...store, payload],

    // addUser: (store, { payload }) => {
    //   store.push(payload);
    // },
    // для генерації id в екшен addUser передаєм об'єкт з 2-ма власивостями редюсер і препеа
    addUser: {
      reducer: (store, { payload }) => {
        store.users.push(payload);
      },
      prepare: payload => ({
        payload: {
          ...payload,
          id: nanoid(6),
        },
      }),
    },
    // removeUser: (store, { payload }) => {
    //   console.log('payload', payload, 'store', store.users);

    //   store.users = store.users.filter(item => item.id !== payload);
    // },
  },
});
// console.log('usersSlice', usersSlice);
// createSlice поверне і екшени add і remove (як userSlice.actions)
//  і редюсер з полями add і remove (як userSlice.reducer)

// експортуємо деструктуризовані з слайса екшени і дефолтно експортуємо редюсер
// export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
