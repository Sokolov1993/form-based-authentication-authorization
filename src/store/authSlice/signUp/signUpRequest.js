import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../instance';

const { REACT_APP_API_KEY } = process.env;
const headers = {
  'Content-Type': 'application/json',
};
export const signUpRequest = createAsyncThunk(
  'auth/signUp',
  async (payload) => {
    try {
      const data = JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });

      const response = await instance.post(
        `accounts:signUp?key=${REACT_APP_API_KEY}`,
        data,
        { headers: headers }
      );

      const token = response.data.idToken;

      return token;
    } catch (err) {
      throw new Error(err);
    }
  }
);
