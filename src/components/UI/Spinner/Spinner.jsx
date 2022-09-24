import React from 'react';
import { DotLoader } from 'react-spinners';

import classes from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <DotLoader />
    </div>
  );
};

export default Spinner;
