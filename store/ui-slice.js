import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'UI',
  initialState: { notification: null, notificationTimer: null },
  reducers: {
    closeTooltip(state, action) {
      state.notification = null;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
