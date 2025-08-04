import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import CalendarIcon from "../../assets/icons/CalenderIcon";
import CrossIcon from "../../assets/icons/CrossIcon";
import "./MapCaledderButton.css";

export default function MapCalendarButton({ label, onDateSelect }) {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSelect = (date) => {
    setShowCalendar(false);
    onDateSelect(date);
  };

  return (
    <div className="map-calendar-wrapper">
      <div
        className="map-calendar-display"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <span className="calendar-label">{label}</span>
        <span className="calendar-icon">
          {showCalendar ? <CrossIcon /> : <CalendarIcon />
}
        </span>
      </div>

      {showCalendar && (
        <div className="calendar-popup">
          <DayPicker
            mode="single"
            selected={undefined}
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
}
