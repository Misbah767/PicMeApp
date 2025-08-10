import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import UserProfile from "../../Components/UserProfile/UserProfile";
import CustomizeProfile from "../../Components/CustomizeProfile/CustomizeProfile";
import PaymentMethodCard from "../../Components/PaymentMethodDetailsPRofileScreeen/PaymetMethodCard";
import { FaCreditCard } from "react-icons/fa";
import "./UserProfileScreen.css";

export default function UserProfileScreen() {
  return (
    <>
      <Navbar />
      <div className="userprofile-card-page">
        <h1 className="userprofile-heading">User Profile</h1>

        <div className="userprofile-card">
          <UserProfile />
          <CustomizeProfile />
          <PaymentMethodCard paymentIcon={FaCreditCard} userName="John Doe" />
        </div>
      </div>
    </>
  );
}
