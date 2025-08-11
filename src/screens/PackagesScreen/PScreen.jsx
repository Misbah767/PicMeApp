import React from "react";
import PackageNavbar from "../../Components/PackageNavbar/PackageNavbar";
import AllPackages from "../../Components/PackagePlan/AllPackage";
import "./PScreen.css";

export default function PScreen() {
  return (
    <div className="p-screen">
      <div className="p-body">
        <PackageNavbar />
        <AllPackages />
      </div>
    </div>
  );
}
