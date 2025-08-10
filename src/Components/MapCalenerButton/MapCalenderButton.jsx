import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import { FiCalendar, FiX } from "react-icons/fi";
import "./MapCalendderButton.css";

export default function MapCalendarButton({ label, onDateSelect, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const calendarRef = useRef();

  const toggleCalendar = (e) => {
    e?.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleDateSelect = (date) => {
    setSelected(date);
    setIsOpen(false);
    onDateSelect(date);
  };

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`map-calendar-wrapper ${className}`} ref={calendarRef}>
      <div
        className={`map-calendar-display ${isOpen ? "active" : ""}`}
        onClick={toggleCalendar}
      >
        <span className="calendar-label">
          {selected ? format(selected, "MMM d, yyyy") : label}
        </span>
        <span className="calendar-toggle-icon" onClick={toggleCalendar}>
          {isOpen ? <FiX size={18} /> : <FiCalendar size={18} />}
        </span>
      </div>

      {isOpen && (
        <div className="calendar-popup calendar-popup-right">
          <DatePicker
            selected={selected}
            onChange={handleDateSelect}
            inline
            calendarClassName="custom-calendar"
          />
        </div>
      )}
    </div>
  );
}
