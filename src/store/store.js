import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from './authSlice/signUp/signUpSlice';

export const store = configureStore({
  reducer: {
    signUpSlice: signUpSlice,
  },
});
