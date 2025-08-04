import React from "react";
import "./CategoryDropdown.css";

const options = [
  "Travel Photographer",
  "Concert Photographer",
  "Birthday Photographer",
  "Street Photographer",
  "Wedding Photographer",
];

const CategoryDropdown = ({ innerRef }) => {
  return (
    <div className="photographer-popup" ref={innerRef}>
      {options.map((option, index) => (
        <div key={index} className="popup-option">
          {option}
        </div>
      ))}
    </div>
  );
};

export default CategoryDropdown;
