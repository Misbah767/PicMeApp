import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PGLContent from "./PGLContent";
import "./PGLScreen.css"
export default function PhotographerScreen() {
  return (
    <div className="photographer-screen">
      <Navbar />
      <PGLContent />
    </div>
  );
}
