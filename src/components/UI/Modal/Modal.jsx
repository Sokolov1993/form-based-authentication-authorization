import React from 'react';

import Portal from '../../Portal/Portal';
import Input from '../Input/Input';
import Button from '../Button/Button';

import classes from './Modal.module.scss';

const Modal = ({ onClickOkButton, onClickCancelButton, inputRef }) => {
  return (
    <Portal onBackdropClick={onClickCancelButton}>
      <div className={classes.modal}>
        <h2 className={classes.modal__title}>Are you sure?</h2>
        <p className={classes.modal__text}>
          Do you want to reset your password?
        </p>
        <Input
          isInputValid={true}
          placeholder="Enter your email"
          inputRef={inputRef}
          type="email"
        />
        <div className={classes.modal__buttons}>
          <Button className="button" onClick={onClickCancelButton}>
            Cancel
          </Button>
          <Button onClick={onClickOkButton} className="button">
            Reset password
          </Button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
