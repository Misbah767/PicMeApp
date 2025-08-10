// routes/PublicRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("access_token");
  console.log(token )
  return token ? <Navigate to="/SearchLocation" replace /> : <Outlet />;
};

export default PublicRoute;

