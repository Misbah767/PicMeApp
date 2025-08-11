import React from "react";
import styles from "./Buttons.module.css";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function MainButtons() {
  const navigate = useNavigate();

  const handleNavigation = (type) => {
    const typeValue = type === "customer" ? "0" : "1";
    console.log(`Navigating to SignIn as type=${typeValue}`);
    navigate(`/signin?type=${typeValue}`);
  };

  return (
    <div className={styles.buttonGroup}>
      <Button variant="filled" onClick={() => handleNavigation("customer")}>
        Continue as Customer
      </Button>
      <Button variant="outline" onClick={() => handleNavigation("photographer")}>
        Continue as Photographer
      </Button>
    </div>
  );
}
 