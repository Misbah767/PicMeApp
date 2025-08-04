import React from "react"
import styles from "./whiteLogo.module.css"
import whiteLogo from "../../assets/images/whiteLogo.png"

export default function WhiteLogo() {
  return (
    <img src={whiteLogo} alt="PicMe Logo" className={styles.logoImg} />
  )
}
