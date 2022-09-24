import React from 'react';
import { auth } from '../../components/services/firebase';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'grey', textAlign: 'center' }}>
      <h1 style={{ color: 'black', textAlign: 'center' }}>HOME PAGE</h1>
      <button
        style={{ backgroundColor: 'black', cursor: 'pointer' }}
        onClick={() => auth.signOut()}
      >
        LOG OUT
      </button>
    </div>
  );
};

export default Home;
