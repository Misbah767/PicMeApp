import React from "react";
import styles from "./Button.module.css";

export default function Button({
  variant = "filled",
  children,
  onClick,
  leftIcon,
  disabled = false,
  className = "", 
}) {
  const classNames =
    variant === "filled"
      ? `${styles.button} ${styles.filled} ${className}`
      : `${styles.button} ${styles.outline} ${className}`;

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      <span>{children}</span>
    </button>
  );
}
