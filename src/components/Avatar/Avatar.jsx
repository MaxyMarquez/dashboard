import React from "react";
import "./Avatar.css";

const Avatar = ({
  children,
  variant,
  size,
  src = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
  alt,
}) => {
  return (
    <div className={`avatar-container ${size}`}>
      <div className="avatar-dot"></div>
      {src && <img src={src} alt={alt} className="avatar-img" />}
      {children}
    </div>
  );
};

export default Avatar;
