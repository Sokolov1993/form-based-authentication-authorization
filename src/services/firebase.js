import firebase from 'firebase/compat/app';
import { auth as firebaseAuth } from 'firebase/compat/auth';

import { REACT_APP_API_KEY } from '../constants/requestHelpers';

const firebaseConfig = {
  apiKey: `${REACT_APP_API_KEY}`,
  authDomain: 'auth-ce801.firebaseapp.com',
  projectId: 'auth-ce801',
  storageBucket: 'auth-ce801.appspot.com',
  messagingSenderId: '310858837488',
  appId: '1:310858837488:web:c883969367f1d18e218135',
  measurementId: 'G-TWDG3CKE64',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
