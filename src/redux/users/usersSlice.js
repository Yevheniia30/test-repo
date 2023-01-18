import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// import { store } from 'redux/store';

// викликаємо creteslice, він приймає об'єкт налаштувань
const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  //   в об'єкті редюсер перелічуємо всі редюсери
  //   вбудована бібліотека immer дозволяє мутувати стан
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
    removeUser: (store, { payload }) => {
      console.log('payload', payload, 'store', store.users);

      store.users = store.users.filter(item => item.id !== payload);
    },
  },
});
// console.log('usersSlice', usersSlice);
// createSlice поверне і екшени add і remove (як userSlice.actions)
//  і редюсер з полями add і remove (як userSlice.reducer)

// експортуємо деструктуризовані з слайса екшени і дефолтно експортуємо редюсер
export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
