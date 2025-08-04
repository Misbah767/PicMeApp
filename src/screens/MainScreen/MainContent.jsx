// src/components/MainContent/MainContent.jsx
import React from "react";
import Buttons from "./MainButtons";
import Logo from "../../Components/Logo/Logo";
import "./Content.css";

export default function MainContent() {
  return (
    <div className="main-content-wrapper">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="main-con">
        <div className="content-container">
          <div className="heading-text">
            <p className="line1">Experience</p>
            <p className="line2"> <span className="mainspan">photography</span> in a new</p>
            <p className="line3">Dimension</p>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
