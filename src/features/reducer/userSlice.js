import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  }
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.user;
export const selectIsLoading = state => state.user.isLoading;
export const selectError = state => state.user.error;

export default userSlice.reducer;
