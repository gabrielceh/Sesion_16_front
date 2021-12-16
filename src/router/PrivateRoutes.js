import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../auth/auth';

/**
 * Si el usuario no esta autenticado, evita que vaya a las rutas
 */
const PrivateRoutes = ({ children }) => {
  return auth() ? children : <Navigate to="/" />;
};

export default PrivateRoutes;
