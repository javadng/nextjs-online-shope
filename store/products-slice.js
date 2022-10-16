import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [] };

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    replaceItems(state, action) {
      state.products = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
