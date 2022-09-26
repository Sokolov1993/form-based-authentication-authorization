import React from 'react';

import { logOut } from '../../store/authSlice/authSlice';
import { auth } from '../../services/firebase';

import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: 'grey', textAlign: 'center' }}>
      <h1 style={{ color: 'black', textAlign: 'center' }}>HOME PAGE</h1>
      <button
        style={{ backgroundColor: 'black', cursor: 'pointer' }}
        onClick={() => {
          auth.signOut();
          dispatch(logOut());
        }}
      >
        LOG OUT
      </button>
    </div>
  );
};

export default Home;
