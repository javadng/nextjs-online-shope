import { createSlice } from '@reduxjs/toolkit';

const initialState = { homeBlog: [] };
const blogHomeSlice = createSlice({
  name: 'homeBlog',
  initialState,
  reducers: {
    replaceBlogHome(state, action) {
      state.homeBlog = action.payload;
    },
  },
});

export const blogHomeActions = blogHomeSlice.actions;
export default blogHomeSlice;
