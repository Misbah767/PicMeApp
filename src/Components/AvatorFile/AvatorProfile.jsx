import React from "react";
import "./AvatorProfile.css";
import DefaultAvatar from "../../assets/images/AvatorIcon.png"; // You can replace with your actual default avatar icon
import StarIcon from "../../assets/icons/StarIcon"; // Replace with your star SVG

const AvatarProfile = ({ propsMap }) => {
  const {
    avatarIcon: AvatarIcon = DefaultAvatar,
    name = "John Doe",
    subtitle = "Wedding Photographer",
    rating = "4.4",
    reviews = 123,
  } = propsMap;

  return (
    <div className="avatar-profile">
      <div className="avatar-icon">
       <img src={DefaultAvatar} className="avator-image" alt="" />
      </div>
      <h3 className="avatar-name">{name}</h3>
      <p className="avatar-subtitle">{subtitle}</p>
      <div className="avatar-review">
        <StarIcon className="star-icon" />
        <span className="review-text">
          {rating} ({reviews} Reviews)
        </span>
      </div>
    </div>
  );
};

export default AvatarProfile;
