import React, { Fragment } from 'react';

import classes from './Input.module.scss';

const Input = ({
  htmlFor,
  label,
  type,
  classNameInput,
  placeholder,
  value,
  onChange,
  endInputLogo,
  startInputLogo,
  ...args
}) => {
  return (
    <div className={classes[classNameInput]}>
      <label htmlFor={htmlFor}>{label}</label>
      <span className={classes.startInputLogo}>
        {startInputLogo && (
          <img src={startInputLogo} alt="Icon in the start of input field" />
        )}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        id={htmlFor}
        value={value}
        onChange={onChange}
        {...args}
      />
      <span className={classes.endInputLogo}>
        {endInputLogo && (
          <img src={endInputLogo} alt="Icon in the end of input field" />
        )}
      </span>
    </div>
  );
};

export default Input;
