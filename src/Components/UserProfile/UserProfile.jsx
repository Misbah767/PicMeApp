import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const UserProfile = () => {
  const [user, setUser] = useState({ name: "", email: "", image: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="user-profile">
      <div className="avatar-container">
        {user.image ? (
          <img src={user.image} alt="User Avatar" className="avatar-img" />
        ) : (
          <FaUserCircle className="avatar-icon" />
        )}

        {/* Edit Icon */}
        <button className="edit-btn">
          <MdEdit />
        </button>
      </div>

      {/* Name */}
      <h2 className="user-name">{user.name || "Guest User"}</h2>

      {/* Email */}
      <p className="user-email">{user.email || "guest@example.com"}</p>
    </div>
  );
};

export default UserProfile;
