import React, { useState, useRef, useEffect } from "react";
import "./SearchInput.css";
import SearchIcon from "../../assets/icons/SearchIcon";
import ControlPanelIcon from "../../assets/icons/ControlPanel";
import CategoryDropdown from "./CategoryDropdown";
import { useCategories } from "../../hooks/useCategories";

const SearchInput = ({ onNameSearch, onCategorySelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dropdownRef = useRef(null);

  const { categories, loading } = useCategories();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onNameSearch(value);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
    setShowDropdown(false); //
  };

  const handleClearCategory = () => {
    setSelectedCategory(null);
    onCategorySelect(null); // 
    setShowDropdown(false); //
  };

  return (
    <div className="search-input-wrapper">
      <div className="left-icon-section">
        <SearchIcon />
      </div>

      <input
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      <div className="right-icon-section">
        <span className="divider" />
        <div onClick={toggleDropdown} style={{ cursor: "pointer" }}>
          <ControlPanelIcon />
        </div>

        {showDropdown && !loading && (
          <div ref={dropdownRef}>
            <CategoryDropdown
              options={categories}
              onSelect={handleCategorySelect}
              selectedCategory={selectedCategory}
              onClearCategory={handleClearCategory}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
