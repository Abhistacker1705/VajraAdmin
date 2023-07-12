import React from "react";
import {Navigate, Outlet} from "react-router";

const ProtectedRoute = (props) => {
  return props.isAuthenticated ? (
    props.children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
