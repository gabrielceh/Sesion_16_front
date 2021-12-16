import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../auth/auth';

/**
 * Si el usuario esta autenticado, evita que regrese al login
 */

const PublicRoutes = ({ children }) => {
  return auth() ? <Navigate to="/home" /> : children;
};

export default PublicRoutes;
