import React from 'react';

import Quiz from '../../components/Quiz/Quiz';

import { logOut } from '../../store/authSlice/authSlice';
import { auth } from '../../services/firebase';

import { useDispatch } from 'react-redux';

import classes from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.home} style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>HOME PAGE</h1>
      <button
        style={{ backgroundColor: 'white', cursor: 'pointer', color: 'black' }}
        onClick={() => {
          auth.signOut();
          dispatch(logOut());
        }}
      >
        LOG OUT
      </button>
      <Quiz />
    </div>
  );
};

export default Home;
