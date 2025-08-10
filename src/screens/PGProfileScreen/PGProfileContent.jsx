
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PGProfileContent.css";

import Navbar from "../../Components/Navbar/Navbar";
import AvatarCard from "../../Components/AvatorCard/AvatorCard";
import Button from "../../Components/Button/Button";
import PGProfileNavbar from "../../Components/PhotoGrapherProfileNavbar/PGProfileNavbar";
import PackageNavbar from "../../Components/PackageNavbar/PackageNavbar";
import PlansPage from "../../Components/PackagePlan/PlansPage";

import PortfolioIcon from "../../assets/icons/PortfolioIcon";
import PackageIcon from "../../assets/icons/PackageIcon";
import WhitePackageIcon from "../../assets/icons/WhitePackageIcon";

import PhotographerWorkContent from "../../Components/PhotographerWorkContent/PhotographerWorkContent";

export default function PGProfileContent() {
  const location = useLocation();
  const photographerData = location.state;

  const [activeSection, setActiveSection] = useState("portfolio");
  const [activeTab, setActiveTab] = useState("photos");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  return (
    <>
      <Navbar />
      <div className="pg-profile-wrapper">
        <div className="pg-profile-content">
          <div className="center-avatar">
            <AvatarCard propsMap={photographerData} />
          </div>

          <div className="button-group">
            <Button
              variant={activeSection === "portfolio" ? "filled" : "outline"}
              onClick={() => setActiveSection("portfolio")}
              leftIcon={
                <PortfolioIcon
                  color={activeSection === "portfolio" ? "#ffffff" : "#2BAFC7"}
                  width={20}
                  height={20}
                />
              }
            >
              Portfolio
            </Button>

            <Button
              variant={activeSection === "packages" ? "filled" : "outline"}
              onClick={() => setActiveSection("packages")}
              leftIcon={
                activeSection === "packages" ? (
                  <WhitePackageIcon width={20} height={20} />
                ) : (
                  <PackageIcon width={20} height={20} />
                )
              }
            >
              Packages
            </Button>
          </div>
        </div>

        <div className="pg-tab-content" style={{ minHeight: "500px" }}>
          {activeSection === "portfolio" && (
            <>
              <div className="pg-navbar-wrapper">
                <PGProfileNavbar
                  active={activeTab}
                  setActive={setActiveTab}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  showDropdown={showDropdown}
                  setShowDropdown={setShowDropdown}
                  allCategories={allCategories}
                />
              </div>

              <PhotographerWorkContent
                photographerId={photographerData?.id || "14"}
                activeTab={activeTab}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                setAllCategories={setAllCategories}
              />
            </>
          )}

          {activeSection === "packages" && (
            <>
              <div className="pg-navbar-wrapper">
                <PackageNavbar />
              </div>
              <PlansPage />
            </>
          )}
        </div>
      </div>
    </>
  );
}
