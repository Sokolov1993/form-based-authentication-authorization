import React from 'react';

import classes from './Button.module.scss';

const Button = ({ type, children, className, disabled, onClick }) => {
  const buttonClassName = disabled ? classes['--disabled'] : '';

  return (
    <button
      className={`${classes[className]} ${buttonClassName}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
