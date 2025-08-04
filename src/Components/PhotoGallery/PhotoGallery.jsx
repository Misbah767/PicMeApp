import React from "react";
import "./PhotoGallery.css";

export default function PhotoGallery({ images }) {
  return (
    <div className="photo-gallery-wrapper">
      <div className="photo-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="gallery-img"
          />
        ))}
      </div>
    </div>
  );
}
