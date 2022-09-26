import React, { useState, useEffect, Fragment, useRef } from 'react';

import AuthForm from '../UI/AuthForm/AuthForm';
import Modal from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';

import { emailValidationRegExp } from '../../constants/emailRegExpValidation';
import { authActions } from '../../constants/requestHelpers';
import { instance } from '../../store/authSlice/instance';
import { signInWithGoogleAcc } from '../../store/authSlice/authSlice';

import { authRequest } from '../../store/authSlice/authRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signInWithGoogle } from '../../services/firebase';
import firebase from 'firebase/compat/app';

const Auth = () => {
  const dispatch = useDispatch();
  const { token, pending, error } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const resetPasswordEmail = useRef();

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const [isSignInFormShow, setIsSignInFormShow] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      firebase.auth().onAuthStateChanged((user) => {
        const token = user?._delegate?.accessToken;
        dispatch(signInWithGoogleAcc(token));
      });
    }
  }, []);

  useEffect(() => {
    if (!isPasswordTouched && !isEmailTouched) return;

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

  const onResetPasswordClickHandler = () => {
    const url = authActions.passwordReset;

    instance.post(url, {
      requestType: 'PASSWORD_RESET',
      email: resetPasswordEmail.current.value,
      url: authActions.passwordReset,
    });

    setForgotPassword(false);
  };

  const onShowModalClickHandler = () => {
    setForgotPassword(true);
  };

  const onCloseModalClickHandker = () => {
    setForgotPassword(false);
  };

  const onAuthFormSubmitHandler = (event) => {
    event.preventDefault();

    if (!isSignInFormShow) {
      dispatch(authRequest({ email, password, url: authActions.signUp }));
    } else {
      dispatch(authRequest({ email, password, url: authActions.signIn }));
    }

    setEmail('');
    setPassword('');
  };

  const onClickRegistrationButton = () => {
    setIsSignInFormShow((prevState) => !prevState);
    setEmail('');
    setPassword('');
    setIsEmailValid(true);
    setIsPasswordValid(true);
    setIsEmailTouched(false);
    setIsPasswordTouched(false);
  };

  if (pending) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {forgotPassword && (
        <Modal
          onClickCancelButton={onCloseModalClickHandker}
          onClickOkButton={onResetPasswordClickHandler}
          inputRef={resetPasswordEmail}
        />
      )}
      <AuthForm
        onFormSubmitHandler={onAuthFormSubmitHandler}
        onPasswordChangeHandler={onPasswordChangeHandler}
        onForgotPasswordClickHandler={onShowModalClickHandler}
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
        signInWithGoogle={signInWithGoogle}
        error={error}
      />
    </Fragment>
  );
};

export default Auth;
