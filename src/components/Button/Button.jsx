import React from "react";

import "./Button.css";

const Button = ({
  type = "button",
  variant = "text",
  children,
  color,
  ...rest
}) => {
  return (
    <button
      className={`button btn-${variant} btn-${color}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
