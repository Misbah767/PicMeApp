import React from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/icons/BackIcon"; 
import "./BackButton.css"
export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go back"
      title="Go back" className="back-button"
    >
      <BackIcon width={44} height={44}  />
    </button>
  );
}
