import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({
  text,
  children,
  top,
  left,
  right,
  bottom,
  disabled = false,
}) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const getPositionClass = () => {
    if (top) return "top";
    if (left) return "left";
    if (right) return "right";
    if (bottom) return "bottom";
    return "top";
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {!disabled && (
        <div className={`tooltip-box ${getPositionClass()}`}>{text}</div>
      )}
    </div>
  );
};

export default Tooltip;
