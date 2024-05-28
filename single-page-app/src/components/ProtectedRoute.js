// ProtectedRoute.js
import React from 'react';
import { useAuth } from '..AuthContext/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ProtectedRoute = ({ element: Element,...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={
        currentUser?.roles.includes(rest.roles[0])
         ? <Element />
          : <Navigate to="/login" replace />
      }
    />
  );
};

export default ProtectedRoute;