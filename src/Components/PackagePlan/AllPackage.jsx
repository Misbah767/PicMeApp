import React from "react";
import PackagePlan from "./PackagePlan";
import packageData from "./packagedata";

const AllPackages = () => {
  return (
    <div
      className="all-packages"
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {packageData.map((pkg) => {
        const isLarge = pkg.className === "large"; 

        return (
          <PackagePlan
            key={pkg.id}
            icon={pkg.icon}
            title={pkg.title}
            price={pkg.price}
            listItems={pkg.listItems}
            buttonText={isLarge ? "Selected" : pkg.buttonText}
            className={pkg.className} 
          />
        );
      })}
    </div>
  );
};

export default AllPackages;
