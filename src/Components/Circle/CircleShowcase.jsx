import React from "react";
import "./CircleShowcase.css";

import folderimage from "../../assets/images/wallet.png";
import graphIcon from "../../assets/images/Graph.png";
import euroIcon from "../../assets/images/Euro.png";
import bankIcon from "../../assets/images/Bank.png";
import checkIcon from "../../assets/images/Check-input.png";

import smallCircleIcon from "../../assets/images/bigCircle (1).png"; 
import rectangleIcon from "../../assets/images/rectangle.png";
import bottomLeftCircleIcon from "../../assets/images/bigCircle (2).png";
import peachrectangleIcon from "../../assets/images/rectangle-peach.png"
export default function CircleShowcase({ size = 330 }) {
  return (
    <div
      className="circle outer"
      style={{ width: size, height: size }}
    >
      <div
        className="circle middle"
        style={{ width: size * 0.8, height: size * 0.8 }}
      >
        <div
          className="circle inner"
          style={{ width: size * 0.6, height: size * 0.6 }}
        >
          <img src={folderimage} className="folder-image" alt="Wallet" />

          {/* 2Inner circle small icon */}
          <div className="icon-inner-top-right">
            <img src={bottomLeftCircleIcon} alt="Inner Small Circle" />
          </div>
        </div>
      </div>

      {/* Main Icons */}
      <img src={graphIcon} className="small-icon icon-top-left" alt="Graph" />
      <img src={euroIcon} className="small-icon icon-left" alt="Euro" />
      <img src={bankIcon} className="small-icon icon-top-right" alt="Bank" />
      <img src={checkIcon} className="small-icon icon-bottom-right" alt="Check" />

      {/* Extra Shape Icons */}
      <img 
        src={smallCircleIcon} 
        className="extra-icon icon-bottom-left" 
        alt="Small Circle" 
      />
      <img 
        src={rectangleIcon} 
        className="extra-icon icon-rect-top-right" 
        alt="Rectangle" 
      />
      <img 
        src={peachrectangleIcon} 
        className="extra-icon icon-peach-rectagle" 
        alt="Rectangle" 
      />
    </div>
  );
}
