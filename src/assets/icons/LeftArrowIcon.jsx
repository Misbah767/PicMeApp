import * as React from "react";

const LeftArrowIcon = ({ width = 9, height = 14, color = "grey", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 9 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.65759 0.999969L1.3418 6.91651L7.42525 13"
      stroke={color}
      strokeWidth={1.89474}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LeftArrowIcon;
