import { createSlice } from '@reduxjs/toolkit';
import { quizRequest } from './quizRequest';

const quizSlice = createSlice({
  name: 'quizSlice',
  initialState: {
    quizData: [],
    error: null,
    pending: false,
  },

  extraReducers: {
    [quizRequest.fulfilled]: (state, action) => {
      state.pending = false;
      state.quizData = action.payload;
    },
    [quizRequest.pending]: (state) => {
      state.pending = true;
    },
    [quizRequest.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
  },
});

export default quizSlice.reducer;
