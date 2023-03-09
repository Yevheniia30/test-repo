import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/authApi1';

export const signup = createAsyncThunk('auth/signup', async (credentials, { rejectWithValue }) => {
  try {
    const data = await api.signup(credentials);
    return data;
  } catch ({ response }) {
    return rejectWithValue(response.data.message);
  }
});

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const data = await api.login(credentials);
    return data;
  } catch ({ response }) {
    return rejectWithValue(response.data.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await api.logout();
  } catch ({ response }) {
    return rejectWithValue(response.data.message);
  }
});

// export const current = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const userToken = auth.token;

//       const data = await api.current(userToken);
//       return data;
//     } catch ({ response }) {
//       return rejectWithValue(response.data.message);
//     }
//   }
// );

// запит потрібен щоб при завантаженні сайта перевірити чи валідний токен і якщо валідний, отримати інфу про користувача за цим токеном
export const current = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const authToken = auth.token;
    if (!authToken) {
      return rejectWithValue();
    }
    try {
      const data = await api.current(authToken);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
