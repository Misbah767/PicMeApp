import * as React from "react";

const ChatIcon = ({
  width = 19,
  height = 19,
  color = "white", // Use `color` prop instead of hardcoding stroke
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.6289 8.79169C17.6321 10.0016 17.3494 11.1951 16.8039 12.275C16.1571 13.5691 15.1628 14.6576 13.9324 15.4185C12.702 16.1795 11.284 16.5828 9.83724 16.5834C8.62736 16.5865 7.43385 16.3038 6.35391 15.7584L1.12891 17.5L2.87057 12.275C2.32509 11.1951 2.04242 10.0016 2.04557 8.79169C2.04613 7.34497 2.44947 5.92697 3.2104 4.69653C3.97133 3.46609 5.05981 2.4718 6.35391 1.82503C7.43385 1.27955 8.62736 0.996872 9.83724 1.00003H10.2956C12.2062 1.10544 14.0109 1.91189 15.364 3.26498C16.717 4.61807 17.5235 6.42271 17.6289 8.33336V8.79169Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChatIcon;
