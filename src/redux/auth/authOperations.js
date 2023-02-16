// import { signup, login } from 'services/authApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/authApi';

import { instance, token } from 'services/authApi';

export const signup = createAsyncThunk('auth/signup', async (data, { rejectWithValue }) => {
  try {
    const result = await api.signup(data);
    return result;
  } catch (error) {
    console.log('error', error);
    // const { status, data } = response;
    // const error = { status, message: data.message };
    return rejectWithValue(error.message);
  }
  //   } catch ({ response }) {
  //     console.log('response', response);
  //     const { status, data } = response;
  //     const error = { status, message: data.message };
  //     return rejectWithValue(error);
  //   }
});

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    const result = await api.login(data);
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const result = await api.logout();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// export const current = createAsyncThunk('contacts/current', async (_, thunkApi) => {
//   const state = thunkApi.getState();
//   const currentToken = state.auth.token;
//   console.log('currentToken', currentToken);
//   if (!currentToken) {
//     return thunkApi.rejectWithValue();
//   }
//   token.set(currentToken);
//   try {
//     const { data } = await instance.get('/users/current');
//     return data;
//   } catch (error) {
//     // return error;
//   }
// });

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
    } catch (error) {
      return rejectWithValue(error);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const { auth } = getState();
  //     const authToken = auth.token;
  //     if (!authToken) {
  //       return false;
  //     }
  //   },
  // }
);

//
// export const current = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const result = await api.current(auth.token);
//       return result;
//     } catch (error) {
//       // const { status, data } = response;
//       // const error = {
//       //   status,
//       //   message: data.message,
//       // };
//       return rejectWithValue(error.message);
//     }
//   }
// );
