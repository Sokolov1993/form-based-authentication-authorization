import React, { Fragment } from 'react';

import Quiz from '../../components/Quiz/Quiz';
import Header from '../../components/Header/Header';

import classes from './Home.module.scss';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <Quiz />
      </main>
    </Fragment>
  );
};

export default Home;
