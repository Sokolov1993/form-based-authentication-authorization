import { createSlice } from '@reduxjs/toolkit';
import { authRequest } from './authRequest';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    pending: false,
    error: null,
  },
  reducers: {
    signInWithGoogleAcc: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [authRequest.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.pending = false;
    },

    [authRequest.pending]: (state) => {
      state.pending = true;
    },

    [authRequest.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default authSlice.reducer;
export const { signInWithGoogleAcc } = authSlice.actions;
