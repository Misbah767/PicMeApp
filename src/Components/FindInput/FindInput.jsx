import React from "react";
import "./FindInput.css";

export default function FindInput({
  placeholder = "Search...",
  icon: LeftIcon,
  rightIcon: RightIcon,
  onChange,
  value = "",
  bordered = false, 
  ...props
}) {
  return (
    <div className={`search-input-wrapper ${bordered ? "with-border" : ""}`}>
      {LeftIcon && <span className="search-icon left-icon">{<LeftIcon />}</span>}

      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
        onChange={(e) => {
          onChange?.(e);
          console.log("Search:", e.target.value);
        }}
        value={value}
        {...props}
      />

      {RightIcon && <span className="search-icon right-icon">{<RightIcon />}</span>}
    </div>
  );
}
