import axios from 'axios';

export const googleApiInstance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
});

export const firebaseInstance = axios.create({
  baseURL: 'https://auth-ce801-default-rtdb.firebaseio.com/',
});
