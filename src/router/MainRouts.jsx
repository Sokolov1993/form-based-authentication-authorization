import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTokenStatus } from '../store/authSlice/authSlice';

import Welcome from '../pages/Welcome/Welcome';
import Home from '../pages/Home/Home';

const MainRouts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authSlice.token);

  useEffect(() => {
    dispatch(updateTokenStatus());
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate, dispatch]);

  return (
    <Routes>
      <Route index element={<Welcome />} />
      {token && <Route path="/home" element={<Home />} />}
    </Routes>
  );
};

export default MainRouts;
