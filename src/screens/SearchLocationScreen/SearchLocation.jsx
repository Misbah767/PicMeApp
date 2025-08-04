// src/screens/SearchLocation/SearchLocation.jsx
import React from "react";
import "./SearchLocation.css";
import locationImage from "../../assets/images/locationImage.png";
import Button from "../../Components/Button/Button";
import Logo from "../../Components/Logo/Logo";

export default function SearchLocation() {
  const handleChooseLocation = () => {
    // TODO: implement choose location logic
    console.log("Choose Location clicked");
  };

  return (
    <div className="search-location-wrapper">
         <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="search-location-box">
        <img
          src={locationImage}
          alt="Location Icon"
          className="location-image"
        />
        <h2 className="search-heading">Search Location</h2>
        <p className="search-subtext">
          Find the best photographers in your 
        </p>
        <p className="search-subtext-2">area for your next event!</p>
        <Button variant="filled" onClick={handleChooseLocation}>
          Choose Location
        </Button>
      </div>
    </div>
  );
}
