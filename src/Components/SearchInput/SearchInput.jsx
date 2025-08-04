import React, { useState, useRef, useEffect } from "react";
import "./SearchInput.css";
import SearchIcon from "../../assets/icons/SearchIcon"; // Goes to left
import ControlPanelIcon from "../../assets/icons/ControlPanel"; // Goes to right
import CategoryDropdown from "./CategoryDropdown";

const SearchInput = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="search-input-wrapper">
      {/* Left icon (Search) */}
      <div className="left-icon-section">
        <SearchIcon />
      </div>

      {/* Input field */}
      <input className="search-input" placeholder="Search..." />

      {/* Right icon (Control Panel) with divider */}
      <div
        className="right-icon-section"
        onClick={() => setShowPopup(!showPopup)}
      >
        <span className="divider" />
        <ControlPanelIcon />
        {showPopup && <CategoryDropdown innerRef={popupRef} />}
      </div>
    </div>
  );
};

export default SearchInput;
