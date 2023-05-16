// import { store } from "./store";
import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from 'redux/filter/selectors';

export const getUsers = store => store.users.users;
export const getLoading = store => store.users.loading;
export const getError = store => store.users.error;
// export const getFilter = store => store.filter;

// мемоизация
// в createselector передаем те селекторы, от которых зависит мемоизированный селектор
// если с предыдущего allContacts и filtered не изменились, то фильтр не произойдет, а из кеша вернутся старые данные

export const getFilteredContacts = createSelector([getUsers, getFilter], (filtered, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return filtered.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});
