import { createAsyncThunk } from '@reduxjs/toolkit';
import { googleApiInstance } from '../../api/instances';
import { headers } from '../../constants/requestHelpers';

export const authRequest = createAsyncThunk('auth/signUp', async (payload) => {
  const url = payload.url;

  try {
    const data = JSON.stringify({
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    });

    const response = await googleApiInstance.post(`${url}`, data, {
      headers: headers,
    });

    const token = response.data.idToken;

    return token;
  } catch (err) {
    const errorMessage = err.response.data.error.message.split('_').join(' ');

    throw new Error(errorMessage);
  }
});
