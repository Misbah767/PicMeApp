import * as React from "react";

const BackIcon = ({
  width = 20,
  height = 20,
  bgColor = "#2BAFC7", // Correct: used below
  iconColor = "white",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Fix: use bgColor instead of color */}
    <circle cx={15} cy={15} r={15} fill={bgColor} />
    <path
      d="M21 14.5C21 14.9487 20.6362 15.3125 20.1875 15.3125L11.1282 15.3125L15.0891 19.2733C15.4128 19.5971 15.4081 20.1234 15.0787 20.4413C14.7575 20.7515 14.2469 20.747 13.9312 20.4312L8.06436 14.5644C8.02881 14.5288 8.02881 14.4712 8.06436 14.4356L13.93 8.57002C14.2448 8.25521 14.7552 8.25522 15.07 8.57003C15.3838 8.88383 15.3849 9.39223 15.0725 9.70743L11.1282 13.6875L20.1875 13.6875C20.6362 13.6875 21 14.0513 21 14.5Z"
      fill={iconColor}
    />
  </svg>
);

export default BackIcon;
