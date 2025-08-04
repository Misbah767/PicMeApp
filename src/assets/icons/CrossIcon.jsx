import * as React from "react";
import { Colors } from "../../constants/Colors"; 

const CrossIcon = ({ width = 20, height = 20, color = Colors.grayMedium, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 5L5 15M5 5L15 15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CrossIcon;
