import { configureStore } from '@reduxjs/toolkit';
import blogHomeSlice from './blogHome-slice';
import cartSlice from './cart-slice';
import productSlice from './products-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    UI: uiSlice.reducer,
    products: productSlice.reducer,
    blogsHome: blogHomeSlice.reducer,
  },
});

export default store;
