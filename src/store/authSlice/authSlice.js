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

      localStorage.setItem('token', action.payload);
    },

    logOut: (state) => {
      state.token = null;

      localStorage.removeItem('token');
    },

    updateTokenStatus: (state) => {
      const token = localStorage.getItem('token');

      if (token) {
        state.token = token;
      }
    },
  },
  extraReducers: {
    [authRequest.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.pending = false;

      localStorage.setItem('token', action.payload);
    },

    [authRequest.pending]: (state) => {
      state.pending = true;
    },

    [authRequest.rejected]: (state, action) => {
      state.error = action.error;
      state.pending = false;
    },
  },
});

export default authSlice.reducer;
export const { signInWithGoogleAcc, logOut, updateTokenStatus } =
  authSlice.actions;
