import React from 'react';

// import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateUser from '../pages/User/createUser';
import CreateMenu from '../pages/Config/createMenu';
import CreateHeader from '../pages/Config/createHeader';
import CreateSectionOne from '../pages/Site/createSectionOne';
import CreateSectionTwo from '../pages/Site/createSectionTwo';

const RoutesPage: React.FC = () => {
  return (

    <Routes>
      <Route path='/login' caseSensitive={false} element={<SignIn />} />
      <Route path='/registrar' caseSensitive={false} element={<SignUp />} />
      <Route path='/' caseSensitive={false} element={<Home />} />

      {/* <Route path='/dashboard' caseSensitive={false} element={<Dashboard />} /> */}
      <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
      <Route path="/create-user" element={<PrivateRoute> <CreateUser /> </PrivateRoute>} />
      <Route path="/create-menu" element={<PrivateRoute> <CreateMenu /> </PrivateRoute>} />
      <Route path="/create-header" element={<PrivateRoute> <CreateHeader /> </PrivateRoute>} />
      <Route path="/create-section-one" element={<PrivateRoute> <CreateSectionOne /> </PrivateRoute>} />
      <Route path="/create-section-two" element={<PrivateRoute> <CreateSectionTwo /> </PrivateRoute>} />


    </Routes>
  );
}

export default RoutesPage;
