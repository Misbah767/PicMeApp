import React from "react";
import styles from "./SocialButton.module.css";

export default function SocialButton({ icon, text, ...props }) {
  return (
    <button className={styles.socialBtn} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
}
