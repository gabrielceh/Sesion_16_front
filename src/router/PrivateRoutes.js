import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../auth/auth';

const PrivateRoutes = ({ children }) => {
  return auth() ? children : <Navigate to="/" />;
};

export default PrivateRoutes;
