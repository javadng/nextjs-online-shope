import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: { notification: null, searchParam: "" },
  reducers: {
    //methods
    showNotification(state, action) {
      state.notification = {
        state: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setSearchParam(state, action) {
      state.searchParam = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
