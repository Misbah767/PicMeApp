import React from "react";
import "./PGProfileNavbar.css";
import BottomArrowIcon from "../../assets/icons/BottomArrowIcon";

const PGProfileNavbar = ({
  active,
  setActive,
  selectedCategory,
  onCategoryChange,
  showDropdown,
  setShowDropdown,
  allCategories = [],
}) => {
  const normalizedCategory = selectedCategory?.toLowerCase() || "";

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

      {(active === "photos" || active === "videos") && (
        <div className="pg-nav-right">
          <div className="pg-category-wrapper">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="pg-category-button pg-nav-link"
            >
              {selectedCategory
                ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
                : "Select Category"}{" "}
              <BottomArrowIcon className="pg-nav-icon" />
            </button>

            {showDropdown && (
              <div className="pg-category-dropdown">
                <p
                  onClick={() => {
                    onCategoryChange("");
                    setShowDropdown(false);
                  }}
                  className="pg-category-item"
                >
                  All Categories
                </p>

                {allCategories.map((category, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      onCategoryChange(category);
                      setShowDropdown(false);
                    }}
                    className={`pg-category-item ${
                      normalizedCategory === category ? "pg-category-active" : ""
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PGProfileNavbar;
