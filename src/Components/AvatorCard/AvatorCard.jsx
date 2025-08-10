import React from "react";
import "./AvatorCard.css";
import StarIcon from "../../assets/icons/StarIcon";
import DefaultAvatarIcon from "../../assets/images/AvatorIcon.png";
import { useNavigate } from "react-router-dom";

const AvatorCard = ({ propsMap = {} }) => {
  const {
    id,
    avatarIcon = DefaultAvatarIcon,
    name,
    subtitle,
    rating,
    reviews,
    className = "",
  } = propsMap;

  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/PGProfile/photographer/${id}`, {
        state: propsMap, 
      });
    }
  };

  return (
    <div className={`avator-card ${className}`} onClick={handleClick}>
      <div className="avator-card-img">
        <img src={avatarIcon || DefaultAvatarIcon} alt={name || "Avatar"} />
      </div>

      <div className="avator-card-info">
        <h2 className="avator-card-name">{name}</h2>
        <p className="avator-card-subtitle">{subtitle}</p>
        <div className="avator-card-review">
          <StarIcon />
          <span>
            {rating} ({reviews} Reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default AvatorCard;
