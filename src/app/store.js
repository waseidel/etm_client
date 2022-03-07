import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/reducer/userSlice.js';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
