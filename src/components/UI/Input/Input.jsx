import React, { Fragment } from 'react';

import classes from './Input.module.scss';

const Input = ({
  htmlFor,
  label,
  type,
  className,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  endInputLogo,
  startInputLogo,
  onPasswordShowHandler,
  isInputValid,
  ...args
}) => {
  const inputClassName = !isInputValid ? classes['--invalidInput'] : '';

  return (
    <div className={classes[className]}>
      <label htmlFor={htmlFor}>{label}</label>
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
