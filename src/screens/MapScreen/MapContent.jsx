import React, { useState } from "react";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import IconBox from "../../Components/IconBox/IconBox";
import MapLocationIcon from "../../assets/icons/MapLocationIcon";
import MapCalendarButton from "../../Components/MapCalenerButton/MapCalenderButton";
import "./MapContent.css";
import FindInput from "../../Components/FindInput/FindInput";

export default function MapContent() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
<div className="map-content">
  <div className="map-inner">
    <div className="map-header-row">
      <FindInput
        icon={LeftArrowIcon}
        placeholder="Find for photographers"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconBox icon={MapLocationIcon} />
    </div>

    <div className="calendar-button-group">
      <MapCalendarButton label="From" onDateSelect={(date) => console.log("From:", date)} />
      <MapCalendarButton label="To" onDateSelect={(date) => console.log("To:", date)} />
    </div>
  </div>
</div>

  );
}
