import React from "react";
import AvatarProfile from "./AvatarProfile";
import avatarData from "./AvatarData";

const AvatarList = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {avatarData.map((item, index) => (
        <AvatarProfile key={index} propsMap={item} />
      ))}
    </div>
  );
};

export default AvatarList;
