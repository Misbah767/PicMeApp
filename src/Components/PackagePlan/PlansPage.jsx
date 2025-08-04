import React from "react";
import { useNavigate } from "react-router-dom";
import packageData from "./packagedata";
import PackagePlan from "./PackagePlan";
import "./PlansPage.css"
const PlansPage = () => {
  const navigate = useNavigate();

  return (
    <div className="plans-wrapper">
      {packageData.map(plan => (
        <div key={plan.id} onClick={() => navigate(`/Packages/${plan.id}`)} style={{ cursor: "pointer" }}>
          <PackagePlan {...plan} />
        </div>
      ))}
    </div>
  );
};

export default PlansPage;
