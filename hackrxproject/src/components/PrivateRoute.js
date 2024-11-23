import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase.js'; // Adjust based on your Firebase setup

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!auth.currentUser; // Check authentication status
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;