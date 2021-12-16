import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Route404 from './Route404';

/**
 * Se incrusta en el app
 * */

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route
        path="/home/*"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />

      <Route path="*" element={<Route404 />} />
    </Routes>
  );
};

export default AppRouter;
