import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import PrivateRoutes from './PrivateRoutes';
import Route404 from './Route404';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
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
