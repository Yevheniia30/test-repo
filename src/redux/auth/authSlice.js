import { createSlice } from '@reduxjs/toolkit';
import { current, login, logout, signup } from './authOperations';

const initialState = {
  user: {},
  token: null,
  isLogin: false,
  loading: false,
  error: null,
  location: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleError = (state, { payload }) => {
  state.error = payload;
  state.loading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.loading = false;
      })
      .addCase(signup.rejected, handleError)
      //
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.loading = false;
      })
      .addCase(login.rejected, handleError)
      //
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLogin = false;
        state.loading = false;
      })
      .addCase(logout.rejected, handleError)
      //
      .addCase(current.pending, handlePending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.loading = false;
      })
      .addCase(current.rejected, handleError);
  },
});

export default authSlice.reducer;
export const { setLocation } = authSlice.actions;
