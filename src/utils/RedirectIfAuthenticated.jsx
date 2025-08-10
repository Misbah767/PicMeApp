// // src/utils/RedirectIfAuthenticated.jsx
// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { getAccessToken } from "./localStorage";

// export default function RedirectIfAuthenticated({ children }) {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const type = searchParams.get("type") || "0";

//   useEffect(() => {
//     const token = getAccessToken();
//     if (token) {
//       navigate(type === "0" ? "/searchLocation" : "/dashboard", { replace: true });
//     }
//   }, []);

//   return children;
// }
