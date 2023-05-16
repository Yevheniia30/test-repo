import { createSlice } from '@reduxjs/toolkit';
import { addGoods, deleteGoods, fetchGoods } from './operations';

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
      .addCase(addGoods.rejected, handleError)
      //
      .addCase(deleteGoods.pending, handlePending)
      .addCase(deleteGoods.fulfilled, (state, { payload }) => {
        state.products = state.products.filter(item => item._id !== payload);
        state.loading = false;
      })
      .addCase(deleteGoods.rejected, handleError);
  },
});

export default productsSlice.reducer;
