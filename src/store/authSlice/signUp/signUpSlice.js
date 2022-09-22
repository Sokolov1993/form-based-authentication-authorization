import { createSlice } from '@reduxjs/toolkit';
import { signUpRequest } from './signUpRequest';

const signUpSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    pending: false,
    error: null,
  },
  extraReducers: {
    [signUpRequest.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.pending = false;
    },

    [signUpRequest.pending]: (state) => {
      state.pending = true;
    },

    [signUpRequest.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default signUpSlice.reducer;
