import React from 'react';

import Quiz from '../../components/Quiz/Quiz';
import Header from '../../components/Header/Header';

import classes from './Home.module.scss';

const Home = () => {
  // TODO: Create header. After - push TITLE and logout button into this element;
  return (
    <div className={classes.home} style={{ textAlign: 'center' }}>
      <Header />
      <main className={classes.home__main}>
        <Quiz />
      </main>
    </div>
  );
};

export default Home;
