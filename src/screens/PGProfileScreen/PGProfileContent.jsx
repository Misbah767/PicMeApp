import React, { useState } from "react";
import "./PGProfileContent.css";

import Navbar from "../../Components/Navbar/Navbar";
import AvatarCard from "../../Components/AvatorCard/AvatorCard";
import AvatarData from "../../Components/AvatorFile/AvatorData";
import Button from "../../Components/Button/Button";
import PortfolioIcon from "../../assets/icons/PortfolioIcon";
import PackageIcon from "../../assets/icons/PackageIcon";
import WhitePackageIcon from "../../assets/icons/WhitePackageIcon"; // ✅ White icon added
import PGProfileNavbar from "../../Components/PhotoGrapherProfileNavbar/PGProfileNavbar";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import VideoGallery from "../../Components/VideoGallery/VideoGallery";
import PackageNavbar from "../../Components/PackageNavbar/PackageNavbar";
import AllPackages from "../../Components/PackagePlan/AllPackage";
import ReviewBox from "../../Components/ReviewBox/ReviewBox"
import sampleImages from "../../constants/sampleImages";
import sampleVideos from "../../constants/SampleVideos";
import PlansPage from "../../Components/PackagePlan/PlansPage";

export default function PGProfileContent() {
  const [activeSection, setActiveSection] = useState("portfolio");
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <div className="pg-profile-wrapper">
      <div className="pg-profile-content">
        <div className="center-avatar">
          <AvatarCard propsMap={AvatarData[0]} />
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

      <div className="pg-tab-content">
        {activeSection === "portfolio" && (
          <>
            <div className="pg-navbar-wrapper">
              <PGProfileNavbar active={activeTab} setActive={setActiveTab} />
            </div>

            {activeTab === "photos" && <PhotoGallery images={sampleImages} />}
            {activeTab === "videos" && <VideoGallery videos={sampleVideos} />}
            {activeTab === "reviews" && <p><ReviewBox className="pg-review-main"/></p>}
            {activeTab === "category" && (
              <p>Category Type Section Coming Soon</p>
            )}
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
  );
}
