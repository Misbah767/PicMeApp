import React, { useState } from "react";
import "./PGProfileNavbar.css";
import BottomArrowIcon from "../../assets/icons/BottomArrowIcon";

const PGProfileNavbar = ({ active, setActive }) => {
    return (
      <div className="pg-nav-wrapper">
        <div className="pg-nav-left">
          <div
            className={`pg-nav-link ${active === "photos" ? "pg-active" : ""}`}
            onClick={() => setActive("photos")}
          >
            Photos <BottomArrowIcon className="pg-nav-icon" />
          </div>
          <div
            className={`pg-nav-link ${active === "videos" ? "pg-active" : ""}`}
            onClick={() => setActive("videos")}
          >
            Videos <BottomArrowIcon className="pg-nav-icon" />
          </div>
          <div
            className={`pg-nav-link ${active === "reviews" ? "pg-active" : ""}`}
            onClick={() => setActive("reviews")}
          >
            Reviews <BottomArrowIcon className="pg-nav-icon" />
          </div>
        </div>
        <div
          className={`pg-nav-link pg-category-link ${
            active === "category" ? "pg-active" : ""
          }`}
          onClick={() => setActive("category")}
        >
          Category Type <BottomArrowIcon className="pg-nav-icon" />
        </div>
      </div>
    );
  };
  
  export default PGProfileNavbar;
  