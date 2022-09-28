import React from 'react';

import Button from '../UI/Button/Button';

import { logOut } from '../../store/authSlice/authSlice';
import { auth } from '../../services/firebase';
import { useDispatch } from 'react-redux';

import classes from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();

  const onCkickLogOut = () => {
    auth.signOut();
    dispatch(logOut());
  };

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <h1 className={classes.header__title}>SIMPLE JS QUIZ</h1>
        <Button type="button" className="button" onClick={onCkickLogOut}>
          LOG OUT
        </Button>
      </div>
    </header>
  );
};

export default Header;
