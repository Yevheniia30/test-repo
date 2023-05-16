import { ADD_USER, FILTER_USER, REMOVE_USER } from './actionTypes';
// import { initialStore } from './store';

// const initialStore = {
//   users: [],
//   filter: '',
// };

const initialStore = '';

export const filterReducer = (store = initialStore, action) => {
  switch (action.type) {
    // case ADD_USER:
    //   // return {..store, users: [...store.users, action.payload]}
    //   return { ...store, users: [...store.users, action.payload] };
    // //   break;
    // case REMOVE_USER:
    //   return { ...store, users: store.users.filter(item => item.id !== action.payload) };

    case FILTER_USER:
      // return { ...store, filter: action.payload };
      return action.payload;

    default:
      return store;
  }
  //   return store;
};
