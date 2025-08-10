import React from "react";
import "./BookingCard.css";
import Button from "../Button/Button";

export default function BookingCard() {
  const bookingData = {
    mainTitle: "Booking Details",
    info1: "Your Order is booked with",
    info2: "Joy Mark. Be there on July 16th at",
    info3: "12:00 AM.",
  };

  return (
    <div className="booking-card">
      <h2 className="booking-title">{bookingData.mainTitle}</h2>

      <div className="booking-info">
        <h3>{bookingData.info1}</h3>
        <h3>{bookingData.info2}</h3>
        <h3>{bookingData.info3}</h3>
      </div>

      <div className="booking-buttons">
        <Button variant="filled">Go to Chat</Button>
        <Button variant="outlined">Home</Button>
      </div>
    </div>
  );
}
