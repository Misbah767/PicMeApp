// src/screens/Photographer/PScreen.jsx

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AvatarCard from "../../Components/AvatorCard/AvatorCard";
import AvatarData from "../../Components/AvatorFile/AvatorData";
import Button from "../../Components/Button/Button";
import PackageIcon from "../../assets/icons/PackageIcon";
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
