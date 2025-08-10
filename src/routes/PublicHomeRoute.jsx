// src/routes/PublicHomeRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { getAccessToken } from "../utils/localStorage";

// export default function PublicHomeRoute({ children }) {
//   const isAuthenticated = getAccessToken();

//   if (isAuthenticated) {
//     // If user is logged in, prevent access to "/"
//     const user = JSON.parse(localStorage.getItem("user"));
//     const type = user?.type || "0";
//     return <Navigate to={type === "0" ? "/searchLocation" : "/dashboard"} replace />;
//   }

//   return children;
// }
