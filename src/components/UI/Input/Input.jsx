import React from 'react';

import { notification } from '../../../constants/authInputNotification';

import classes from './Input.module.scss';

const Input = ({
  htmlFor,
  label,
  type,
  className = 'groupOfFields__input',
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  endInputLogo,
  startInputLogo,
  onPasswordShowHandler,
  isInputValid,
  inputRef,
  ...args
}) => {
  const inputClassName = !isInputValid
    ? classes['--invalidInput']
    : classes['--validInput'];

  const notificationMessage = !isInputValid && notification[type];

  return (
    <div className={classes[className]}>
      <label htmlFor={htmlFor}>
        {label}
        <span style={{ color: 'grey' }}>{notificationMessage}</span>
      </label>
      <span className={classes.startInputLogo}>
        {startInputLogo && (
          <img src={startInputLogo} alt="Icon in the start of input field" />
        )}
      </span>
      <input
        className={`${classes.input} ${inputClassName}`}
        type={type}
        placeholder={placeholder}
        id={htmlFor}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete="true"
        ref={inputRef}
        {...args}
      />
      <span className={classes.endInputLogo}>
        {endInputLogo && (
          <img
            src={endInputLogo}
            alt="Icon in the end of input field"
            onClick={onPasswordShowHandler}
          />
        )}
      </span>
    </div>
  );
};

export default Input;
