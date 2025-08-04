import React from "react";
import "./InputOption.css";

const InputOption = ({ id, label, Icon, isSelected, onChange }) => {
  return (
    <div
      className={`input-option-wrapper ${isSelected ? "selected" : ""}`}
      onClick={() => onChange(id)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onChange(id);
      }}
    >
      <div>
        {Icon && <Icon />}
        <span className="label-text">{label}</span>
      </div>

      <div>
        <span className={`custom-radio ${isSelected ? "checked" : ""}`}>
          {isSelected && <div className="dot" />}
        </span>
      </div>
    </div>
  );
};

export default InputOption;
