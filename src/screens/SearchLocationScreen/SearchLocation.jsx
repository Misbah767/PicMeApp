
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchLocation.css";
import locationImage from "../../assets/images/locationImage.png";
import Button from "../../Components/Button/Button";
import Navbar from "../../Components/Navbar/Navbar";



export default function SearchLocation() {
  const navigate = useNavigate(); 

  const handleChooseLocation = () => {
    navigate("/Map"); //  navigate to /Map
  };

  return (
    <>
      <Navbar />
      <div className="search-location-wrapper">
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
    </>
  );
}
