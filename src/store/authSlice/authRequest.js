import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './instance';
import { headers } from '../../constants/requestHelpers';

export const authRequest = createAsyncThunk('auth/signUp', async (payload) => {
  const url = payload.url;

  try {
    const data = JSON.stringify({
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    });

    const response = await instance.post(`${url}`, data, {
      headers: headers,
    });

    const token = response.data.idToken;

    return token;
  } catch (err) {
    throw new Error(err);
  }
});
