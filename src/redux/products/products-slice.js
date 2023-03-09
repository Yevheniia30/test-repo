import { createSlice } from '@reduxjs/toolkit';
import { addGoods, fetchGoods } from './operations';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleError = (state, { payload }) => {
  state.error = payload;
  state.loading = false;
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchGoods.pending, handlePending)
      .addCase(fetchGoods.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.loading = false;
      })
      .addCase(fetchGoods.rejected, handleError)
      //
      .addCase(addGoods.pending, handlePending)
      .addCase(addGoods.fulfilled, (state, { payload }) => {
        state.products.push(payload);
        state.loading = false;
      })
      .addCase(addGoods.rejected, handleError);
  },
});

export default productsSlice.reducer;
