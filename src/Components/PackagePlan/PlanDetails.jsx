import React from "react";
import { useParams } from "react-router-dom";
import packageData from "./packagedata";
import PackagePlan from "./PackagePlan";

const PlanDetail = () => {
  const { planId } = useParams();
  const selectedPlan = packageData.find((p) => p.id === planId); 

  if (!selectedPlan) {
    return <h2>Plan not found</h2>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <PackagePlan
        {...selectedPlan}         
        buttonText="Selected"    
        isLarge={true}
      />
    </div>
  );
};

export default PlanDetail;
