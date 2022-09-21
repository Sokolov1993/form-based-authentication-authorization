import React from 'react';

import Input from '../UI/Input/Input';
import Button from '../Button/Button';

import backgroundImage from '../../assets/images/authForm/background.jpg';
import facebookIcon from '../../assets/images/authForm/facebook_logo.svg';
import appleIcon from '../../assets/images/authForm/apple_logo.svg';
import googleIcon from '../../assets/images/authForm/google_logo.svg';
import messageIcon from '../../assets/images/authForm/message_logo.svg';
import padlockIcon from '../../assets/images/authForm/padlock_logo.svg';
import viewIcon from '../../assets/images/authForm/view.svg';
import hideIcon from '../../assets/images/authForm/hide.svg';

import classes from './AuthForm.module.scss';

const AuthForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.form__image}>
        <img src={backgroundImage} alt="Airplane in airport" />
      </div>
      <div className={classes.form__inputs}>
        <h2>Sign In</h2>
        <div className={classes.inputs__registerHere}>
          <p>If you don’t have an account </p>
          <p>
            You can <a href="/"> Register here !</a>
          </p>
        </div>
        <div className={classes.inputs__groupOfFields}>
          <Input
            htmlFor="email"
            label="Email"
            type="email"
            classNameInput="groupOfFields__input"
            placeholder="Enter your email address"
            startInputLogo={messageIcon}
            required
          />
          <Input
            htmlFor="password"
            label="Password"
            type="Password"
            classNameInput="groupOfFields__input"
            placeholder="Enter your password"
            startInputLogo={padlockIcon}
            endInputLogo={viewIcon}
            required
          />
        </div>
        <div className={classes.inputs__forgotPassword}>
          <Input
            htmlFor="checkbox"
            type="checkbox"
            label="Remember me"
            classNameInput="forgotPassword__checkbox"
          />
          <a href="/">Forgot password?</a>
        </div>
        <div className={classes.form__button}>
          <Button type="submit">Login</Button>
        </div>
        <div className={classes.form__logo}>
          <a href="/">
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
          <a href="/">
            <img src={appleIcon} alt="Apple icon" />
          </a>
          <a href="/">
            <img src={googleIcon} alt="Google icon" />
          </a>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
