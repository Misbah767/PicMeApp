import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import HomeIcon from "../../assets/icons/HomeIcon";
import ChatIcon from "../../assets/icons/ChatIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import WhiteLogo from "../WhiteLogo/WhiteLogo";

// Hook to detect screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function Navbar() {
  const isMobile = useIsMobile();

  const getIconProps = () => ({
    width: 20,
    height: 20,
    color: isMobile ? "#807A7A" : "#ffffff", // Gray on mobile, white on desktop
  });

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar-desktop">
        <div className="nav-left">
          <WhiteLogo />
        </div>
        <div className="nav-right">
          <NavLink to="/" className="nav-link">
            <HomeIcon {...getIconProps()} />
            <span className="navLinkText">Home</span>
          </NavLink>
          <NavLink to="/chat" className="nav-link">
            <ChatIcon {...getIconProps()} />
            <span className="navLinkText">Chat</span>
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            <ProfileIcon {...getIconProps()} />
            <span className="navLinkText">Profile</span>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="navbar-mobile">
        <NavLink
          to="/"
          className={({ isActive }) => "mobile-link" + (isActive ? " active" : "")}
        >
          <HomeIcon {...getIconProps()} />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) => "mobile-link" + (isActive ? " active" : "")}
        >
          <ChatIcon {...getIconProps()} />
          <span>Chat</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => "mobile-link" + (isActive ? " active" : "")}
        >
          <ProfileIcon {...getIconProps()} />
          <span>Profile</span>
        </NavLink>
      </div>
    </>
  );
}
