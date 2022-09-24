import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '../UI/Backdrop/Backdrop';

const Portal = ({ children, onBackdropClick }) => {
  return (
    children && (
      <Fragment>
        {ReactDOM.createPortal(children, document.getElementById('modal'))}
        {ReactDOM.createPortal(
          <Backdrop onClick={onBackdropClick} />,
          document.getElementById('backdrop')
        )}
      </Fragment>
    )
  );
};

export default Portal;
