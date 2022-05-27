import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// import { Container } from './styles';

const RoutesPage: React.FC = () => {
  return (
    <Routes>
      <Route path='/' caseSensitive={false} element={<Home />} />
      <Route path='/dashboard' caseSensitive={false} element={<Dashboard />} />
      <Route path='/login' caseSensitive={false} element={<SignIn />} />
      <Route path='/registrar' caseSensitive={false} element={<SignUp />} />
    </Routes>
  );
}

export default RoutesPage;
