import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
});
