import React from "react";
import styles from "./InputField.module.css";
import classNames from "classnames";

export default function InputField({
  type = "text",
  placeholder,
  leftIcon,
  rightIcon,
  error,
  className,
  ...props
}) {
  return (
    <div className={styles.fieldGroup}>
      <div
        className={classNames(styles.inputWrapper, {
          [styles.errorWrapper]: !!error,
        })}
      >
        {leftIcon && (
          <span
            className={classNames(styles.iconLeft, {
              [styles.errorIcon]: !!error,
            })}
          >
            {leftIcon}
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          className={classNames(styles.input, className, {
            [styles.errorField]: !!error,
          })}
          {...props}
        />

        {rightIcon && (
          <span
            className={classNames(styles.iconRight, {
              [styles.errorIcon]: !!error,
            })}
          >
            {rightIcon}
          </span>
        )}
      </div>

      {error && <p className={styles.inputError}>{error}</p>}
    </div>
  );
}
