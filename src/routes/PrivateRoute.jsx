import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("access_token");
  console.log(token )
  return token ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
