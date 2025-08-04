// src/components/IconBox.jsx
import React from "react";
import "./IconBox.css"
export default function IconBox({ icon: Icon }) {
  return (
    <div className="icon-box">
      <Icon />
    </div>
  );
}
