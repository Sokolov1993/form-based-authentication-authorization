import React, { Fragment } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

import backgroundImage from '../../../assets/images/authForm/background.jpg';
import facebookIcon from '../../../assets/images/authForm/facebook_logo.svg';
import appleIcon from '../../../assets/images/authForm/apple_logo.svg';
import googleIcon from '../../../assets/images/authForm/google_logo.svg';
import messageIcon from '../../../assets/images/authForm/message_logo.svg';
import padlockIcon from '../../../assets/images/authForm/padlock_logo.svg';
import viewIcon from '../../../assets/images/authForm/view.svg';
import hideIcon from '../../../assets/images/authForm/hide.svg';

import classes from './AuthForm.module.scss';

const AuthForm = ({
  onFormSubmitHandler,
  onForgotPasswordClickHandler,
  onPasswordChangeHandler,
  onPasswordBlurHandler,
  onEmailChangeHandler,
  onEmailBlurHandler,
  email,
  isEmailValid,
  password,
  isPasswordValid,
  isPasswordShown,
  onPasswordShowHandler,
  isSignInFormShow,
  isFormValid,
  onClickRegistrationButton,
  signInWithGoogle,
}) => {
  const title = isSignInFormShow ? 'Sign In' : 'Sign Up';
  const buttonText = isSignInFormShow ? 'Login' : 'Register';
  const passwordInputType = isPasswordShown ? 'text' : 'password';
  const passwordViewIcon = isPasswordShown ? hideIcon : viewIcon;

  const callToAction = () => {
    if (isSignInFormShow) {
      return (
        <Fragment>
          <p>If you don’t have an account </p>
          <span>You can </span>
          <Button
            className="secondaryButton"
            onClick={onClickRegistrationButton}
            type="button"
          >
            Register here !
          </Button>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <p>If you already have an account </p>
          <span>You can </span>
          <Button
            className="secondaryButton"
            onClick={onClickRegistrationButton}
            type="button"
          >
            Login here !
          </Button>
        </Fragment>
      );
    }
  };

  return (
    <form className={classes.form} onSubmit={onFormSubmitHandler}>
      <div className={classes.form__image}>
        <img src={backgroundImage} alt="Airplane in airport" />
      </div>
      <div className={classes.form__inputs}>
        <h2>{title}</h2>
        <div className={classes.inputs__registerHere}>{callToAction()}</div>
        <div className={classes.inputs__groupOfFields}>
          <Input
            htmlFor="email"
            label="Email"
            type="email"
            className="groupOfFields__input"
            placeholder="Enter your email address"
            startInputLogo={messageIcon}
            onChange={onEmailChangeHandler}
            onBlur={onEmailBlurHandler}
            value={email}
            isInputValid={isEmailValid}
            required
          />
          <Input
            htmlFor="password"
            label="Password"
            type={passwordInputType}
            className="groupOfFields__input"
            placeholder="Enter your password"
            startInputLogo={padlockIcon}
            endInputLogo={passwordViewIcon}
            onChange={onPasswordChangeHandler}
            onBlur={onPasswordBlurHandler}
            onPasswordShowHandler={onPasswordShowHandler}
            value={password}
            minlenght="6"
            isInputValid={isPasswordValid}
            required
          />
        </div>
        <div className={classes.inputs__forgotPassword}>
          <Input
            htmlFor="checkbox"
            type="checkbox"
            label="Remember me"
            className="forgotPassword__checkbox"
          />
          <Button
            className="secondaryButton"
            onClick={onForgotPasswordClickHandler}
            type="button"
          >
            Forgot password?
          </Button>
        </div>
        <div className={classes.form__button}>
          <Button className="button" type="submit" disabled={!isFormValid}>
            {buttonText}
          </Button>
        </div>
        <div className={classes.form__logo}>
          <img src={facebookIcon} alt="Facebook icon" />
          <img src={appleIcon} alt="Apple icon" />
          <img src={googleIcon} alt="Google icon" onClick={signInWithGoogle} />
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
