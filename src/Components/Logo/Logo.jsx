import React from "react"
import styles from "./Logo.module.css"
import logoImg from "../../assets/images/Logo.png"

export default function Logo() {
  return (
    <img src={logoImg} alt="PicMe Logo" className={styles.logoImg} />
  )
}
