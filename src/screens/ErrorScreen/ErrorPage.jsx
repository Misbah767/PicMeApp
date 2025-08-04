import React from "react";
import { useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  const errorMsg = location?.state?.message || "Something went wrong.";

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Error</h1>
      <p>{errorMsg}</p>
    </div>
  );
};

export default ErrorPage;
