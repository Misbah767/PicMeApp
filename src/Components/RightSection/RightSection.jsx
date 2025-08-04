import React from "react"
import "./RightSection.css"

export default function RightSection({ image, altText = "Hero" }) {
  return (
    <div className="right-section">
      <img src={image} alt={altText} className="right-image" />
    </div>
  )
}
