import React, { useState, useEffect } from 'react';

import AuthForm from '../UI/AuthForm/AuthForm';
import { emailValidationRegExp } from '../../constants/emailRegExpValidation';
import { signUpRequest } from '../../store/authSlice/signUp/signUpRequest';
import { useDispatch } from 'react-redux';

import classes from './Auth.module.scss';

const Auth = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const [isSignInFormShow, setIsSignInFormShow] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValidEmail = !!email.match(emailValidationRegExp);
    const isValidPassword = password.length > 5;

    if (isValidEmail) {
      setIsEmailValid(true);
    } else if (isEmailTouched) {
      setIsEmailValid(false);
    }

    if (isValidPassword) {
      setIsPasswordValid(true);
    } else if (isPasswordTouched) {
      setIsPasswordValid(false);
    }

    if (isValidEmail && isValidPassword) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    email,
    isEmailTouched,

    password,
    isPasswordTouched,

    isEmailValid,
    isPasswordValid,
  ]);

  const onEmailChangeHandler = (event) => {
    const emailInputValue = event.target.value.replace(/\s/g, '').toLowerCase();

    setEmail(emailInputValue);
  };

  const onEmailBlurHandler = () => {
    setIsEmailTouched(true);
  };

  const onPasswordChangeHandler = (event) => {
    const passwordInputValue = event.target.value.replace(/\s/g, '');

    setPassword(passwordInputValue);
  };

  const onPasswordBlurHandler = () => {
    setIsPasswordTouched(true);
  };

  const onPasswordShowHandler = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const onAuthFormSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(signUpRequest({ email, password }));
  };

  const onClickRegistrationButton = () => {
    setIsSignInFormShow((prevState) => !prevState);
  };

  return (
    <AuthForm
      onFormSubmitHandler={onAuthFormSubmitHandler}
      onPasswordChangeHandler={onPasswordChangeHandler}
      onPasswordBlurHandler={onPasswordBlurHandler}
      onEmailChangeHandler={onEmailChangeHandler}
      onEmailBlurHandler={onEmailBlurHandler}
      email={email}
      isEmailValid={isEmailValid}
      password={password}
      isPasswordValid={isPasswordValid}
      isPasswordShown={isPasswordShown}
      isSignInFormShow={isSignInFormShow}
      onPasswordShowHandler={onPasswordShowHandler}
      isFormValid={isFormValid}
      onClickRegistrationButton={onClickRegistrationButton}
    />
  );
};

export default Auth;
