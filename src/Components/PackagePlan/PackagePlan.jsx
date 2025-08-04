import React from "react";
import "./PackagePlan.css";
import Button from "../Button/Button";

const PackagePlan = ({
  id,
  icon: Icon,
  title,
  price,
  listItems = [],
  buttonText,
  isLarge = false,
  className = "",
  variant = "outline",
}) => {
  return (
    <div
      className={`package-plan ${id}-plan ${isLarge ? "large-plan" : ""} ${className}`}
    >
      <div className="top-icon">{Icon && <Icon fill="#FFFFFF" />}</div>
      <div className="plan-content">
        <h3 className="plan-title">{title}</h3>
        <h4 className="plan-price">${price}</h4>
        <ul className="plan-list">
          {listItems.map((item, index) => (
            <li key={index} className="plan-list-item">
              {item}
            </li>
          ))}
        </ul>
        <Button className="package-plan-btn" variant={variant}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PackagePlan;
