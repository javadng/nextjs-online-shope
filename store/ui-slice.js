import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {},
  reducers: {
    //methods
    showNotification(state, action) {
      
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
