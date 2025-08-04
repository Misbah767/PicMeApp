import React from "react";
import "./PGLContent.css";
import FindInput from "../../Components/FindInput/FindInput";
import SearchInput from "../../Components/SearchInput/SearchInput";

import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import CrossIcon from "../../assets/icons/CrossIcon";

import AvatarProfile from "../../Components/AvatorFile/AvatorProfile";
import AvatarData from "../../Components/AvatorFile/AvatorData"; 

const PGLContent = () => {
  return (
    <div className="pgl-wrapper">
      <div className="innerpart">
        <div className="innerinput">
          <FindInput
            placeholder="Northup Way"
            icon={LeftArrowIcon}
            customWidth="350px"
            rightIcon={() => <CrossIcon />}
            bordered
          />
        </div>

        <h1 className="pgl-heading">Photographers Lists</h1>
        <p className="pgl-description">
          Find the best photographers in your area for your next event!
        </p>

        <div className="innerinput">
          <SearchInput />
        </div>

        <div className="avatar-list-container">
          {AvatarData.slice(0, 4).map((item, index) => (
            <AvatarProfile key={index} propsMap={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PGLContent;
