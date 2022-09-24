export const { REACT_APP_API_KEY } = process.env;

export const headers = {
  'Content-Type': 'application/json',
};

export const authActions = {
  signUp: `accounts:signUp?key=${REACT_APP_API_KEY}`,
  signIn: `accounts:signInWithPassword?key=${REACT_APP_API_KEY}`,
  passwordReset: `accounts:sendOobCode?key=${REACT_APP_API_KEY}`,
};
