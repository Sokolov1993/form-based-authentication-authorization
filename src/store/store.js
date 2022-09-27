import { configureStore } from '@reduxjs/toolkit';

import authSlice from './authSlice/authSlice';
import quizSlice from './quizSlice/quizSlice';

export const store = configureStore({
  reducer: {
    authSlice,
    quizSlice,
  },
});
