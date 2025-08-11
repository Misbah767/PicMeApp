import React from "react";
import { useNavigate } from "react-router-dom";
import "./AvatorProfile.css";

import DefaultAvatar from "../../assets/images/AvatorIcon.png";
import StarIcon from "../../assets/icons/StarIcon";

const AvatarProfile = ({ propsMap }) => {
  const {
    avatarIcon,
    name,
    subtitle,
    rating,
    reviews,
    id,
  } = propsMap;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/PGProfile/photographer/${id}`, { state: propsMap });
  };

  return (
    <div className="avatar-profile" id={`avatar-${id}`} onClick={handleClick}>
      <div className="avatar-icon">
        <img
          src={avatarIcon || DefaultAvatar}
          className="avator-image"
          alt="Avatar"
        />
      </div>
      <h3 className="avatar-name">{name || "No Name"}</h3>
      <p className="avatar-subtitle">{subtitle || "Photographer"}</p>
      <div className="avatar-review">
        <StarIcon className="star-icon" />
        <span className="review-text">
          {rating || "4.0"} ({reviews || 0} Reviews)
        </span>
      </div>
      {/* Displaying ID for reference */}
      {/* <p className="avatar-id">ID: {id}</p> */}
    </div>
  );
};

export default AvatarProfile;

