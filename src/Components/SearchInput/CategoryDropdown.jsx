import React from "react";
import "./CategoryDropdown.css";

const CategoryDropdown = ({
  options = [],
  onSelect,
  selectedCategory,
  onClearCategory,
  innerRef,
}) => {
  const handleClick = (category) => {
    onSelect(category);
  };

  return (
    <div className="category-dropdown-popup" ref={innerRef}>
      <ul className="category-dropdown-options">
        {selectedCategory && (
          <li
            className="category-dropdown-option clear-option"
            onClick={onClearCategory}
          >
            Clear Category
          </li>
        )}
        {options.length === 0 ? (
          <li className="category-dropdown-option">No categories found</li>
        ) : (
          options.map((category, index) => (
            <li
              key={category.id || `${category.name}-${index}`}
              onClick={() => handleClick(category)}
              className="category-dropdown-option debug-text"
            >
              {category}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
