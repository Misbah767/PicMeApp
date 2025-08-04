// // src/pages/PackagesPage.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import packageData from "../../Components/PackagePlan/packagedata";
// import PackagePlan from "../../Components/PackagePlan/PackagePlan";

// const PackagesPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="plans-wrapper">
//       {packageData.map((plan) => (
//         <div
//           key={plan.id}
//           onClick={() => navigate(`/Packages/${plan.id}`)}
//           style={{ cursor: "pointer" }}
//         >
//           <PackagePlan {...plan} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PackagesPage;
