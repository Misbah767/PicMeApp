import React from "react";
import "./Navbar.css"; 

export default function UserDropdown({
  userInfo,
  dropdownOpen,
  closeDropdown,
  handleLogout,
  handleSwitchRole,
  handleContact,
}) {
  if (!userInfo) return null;

  return (
    <div className="dropdown-menu user-dropdown" onMouseLeave={closeDropdown}>
      <div className="dropdown-item" onClick={handleSwitchRole}>
        Switch to {userInfo?.role === "photographer" ? "Customer" : "Photographer"}
      </div>
      <div className="dropdown-item" onClick={handleContact}>
        Contact us
      </div>
      <hr className="dropdown-divider" />
      <div className="dropdown-item logout" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}
