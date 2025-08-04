import React from "react";
import "./AvatorCard.css";
import StarIcon from "../../assets/icons/StarIcon";
import DefaultAvatarIcon from "../../assets/images/AvatorIcon.png";

const AvatorCard = ({ propsMap = {} }) => {
  const {
    avatarIcon = DefaultAvatarIcon,
    name,
    subtitle,
    rating,
    reviews,
    className = "",
  } = propsMap;

  return (
    <div className={`avator-card ${className}`}>
      <div className="avator-card-img">
        <img src={avatarIcon} alt={name || "Avatar"} />
      </div>
      <div className="avator-card-info">
        <h2 className="avator-card-name">{name}</h2>
        <p className="avator-card-subtitle">{subtitle}</p>
        <div className="avator-card-review">
          <StarIcon />
          <span>{rating} ({reviews} Reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default AvatorCard;
