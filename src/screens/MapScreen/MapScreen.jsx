import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MapContent from "./MapContent";

export default function MapScreen() {
  
  return (
    <div className="Map-Screen">
      <Navbar/>
      <MapContent/>
    </div>
  );
}
