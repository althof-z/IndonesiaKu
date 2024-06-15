import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth';

const ProtectedRoute = () => {
  const user = useAuth(); // determine if authorized, from context or however you're doing it

  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
