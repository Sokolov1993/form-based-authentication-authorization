import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Welcome from '../pages/Welcome/Welcome';
import Home from '../pages/Home/Home';

const MainRouts = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.authSlice.token);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

  return (
    <Routes>
      <Route index element={<Welcome />} />
      {token && <Route path="/home" element={<Home />} />}
    </Routes>
  );
};

export default MainRouts;
