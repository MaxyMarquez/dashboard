import React from "react";

import "./Button.css";

const Button = ({
  type = "button",
  variant = "text",
  children,
  color,
  className,
  ...rest
}) => {
  return (
    <button
      className={`button btn-${variant} btn-${color} ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
