import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../auth/auth';

const PublicRoutes = ({ children }) => {
  return auth() ? <Navigate to="/home" /> : children;
};

export default PublicRoutes;
