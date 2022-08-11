import React from 'react'

import PrivateRoute from './PrivateRoute'
import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import CreateHeader from '../pages/Config/createHeader'
import CreateSectionOne from '../pages/Site/createSectionOne'
import CreateSectionTwo from '../pages/Site/createSectionTwo'
import CreateSectionThree from '../pages/Site/createSectionThree'
import CreateSectionFour from '../pages/Site/createSectionFour'
import CreateSectionFive from '../pages/Site/createSectionFive'
import Project from '../pages/Project'
import Profile from '../pages/Profile'
import CreateProject from '../pages/Project/CreateProject'
import UpdateProject from '../pages/Project/UpdateProject'
import ListSectionOne from '../pages/Site/listSectionOne'
import { PortalLayout } from '../pages/layouts/PortalLayout'
import Contract from '../pages/Contract'
import CreateMenu from '../pages/Config/createMenu'
import UpdateUser from '../pages/User/UpdateUser'
import CreateUser from '../pages/User/CreateUser'
import User from '../pages/User'
import ListSectionFive from '../pages/Site/listSectionFive'
import ListSectionThree from '../pages/Site/listSectionThree'
import ListSectionTwo from '../pages/Site/listSectionTwo'
import ListSectionFour from '../pages/Site/listSectionFour'

const RoutesPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" caseSensitive={false} element={<SignIn />} />
      <Route path="/registrar" caseSensitive={false} element={<SignUp />} />
      <Route path="/" caseSensitive={false} element={<Home />} />

      {/* <Route path='/dashboard' caseSensitive={false} element={<Dashboard />} /> */}
      <Route path="/" element={<PortalLayout />}>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* ROUTES LIST */}
        <Route
          path="/list-users"
          element={
            <PrivateRoute>
              {' '}
              <User />{' '}
            </PrivateRoute>
          }
        />
        <Route path="/list-section-one" element={<PrivateRoute><ListSectionOne /></PrivateRoute>} />
        <Route path="/list-section-two" element={<PrivateRoute><ListSectionTwo /></PrivateRoute>} />
        <Route path="/list-section-three" element={<PrivateRoute><ListSectionThree /></PrivateRoute>} />
        <Route path="/list-section-four" element={<PrivateRoute><ListSectionFour /></PrivateRoute>} />
        <Route path="/list-section-five" element={<PrivateRoute><ListSectionFive /></PrivateRoute>} />

        {/* ROUTES CREATED */}
        <Route
          path="/create-user"
          element={
            <PrivateRoute>
              <CreateUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-menu"
          element={
            <PrivateRoute>
              {' '}
              <CreateMenu />{' '}
            </PrivateRoute>
          }
        />
        <Route
          path="/create-header"
          element={
            <PrivateRoute>
              {' '}
              <CreateHeader />{' '}
            </PrivateRoute>
          }
        />
        <Route
          path="/create-section-one"
          element={
            <PrivateRoute>
              <CreateSectionOne />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-section-two"
          element={
            <PrivateRoute>
              <CreateSectionTwo />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-section-three"
          element={
            <PrivateRoute>
              <CreateSectionThree />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-section-four"
          element={
            <PrivateRoute>
              <CreateSectionFour />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-section-five"
          element={
            <PrivateRoute>
              <CreateSectionFive />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-project"
          element={
            <PrivateRoute>
              <CreateProject />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-project/:id"
          element={
            <PrivateRoute>
              <UpdateProject />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-user/:id"
          element={
            <PrivateRoute>
              <UpdateUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/project"
          element={
            <PrivateRoute>
              <Project />
            </PrivateRoute>
          }
        />
        <Route
          path="/contract"
          element={
            <PrivateRoute>
              <Contract />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default RoutesPage
