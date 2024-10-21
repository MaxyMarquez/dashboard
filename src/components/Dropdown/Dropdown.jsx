import React, { useEffect, useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ open, anchorEl, id, children, ...rest }) => {
  const [position, setPosition] = useState({ top: 0, left: 0, right: 0 });

  useEffect(() => {
    if (open && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      const dropdownWidth = 200;

      let newPosition = {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        right: "auto",
      };

      const isOverflowingRight = rect.left + dropdownWidth > window.innerWidth;

      if (isOverflowingRight) {
        newPosition = {
          top: rect.bottom + window.scrollY,
          left: "auto",
          right: 0,
        };
      }

      setPosition(newPosition);
    }

    const handleResize = () => {
      if (open && anchorEl) {
        const rect = anchorEl.getBoundingClientRect();
        const dropdownWidth = 200;

        let newPosition = {
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          right: "auto",
        };

        const isOverflowingRight =
          rect.left + dropdownWidth > window.innerWidth;

        if (isOverflowingRight) {
          newPosition = {
            top: rect.bottom + window.scrollY,
            left: "auto",
            right: 0,
          };
        }

        setPosition(newPosition);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open, anchorEl]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && anchorEl && !anchorEl.contains(event.target)) {
        rest.onClose && rest.onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, anchorEl, rest]);

  return (
    <>
      <div
        className="dropdown"
        style={{
          top: `${position.top}px`,
          left: position.left,
          right: position.right,
          position: "absolute",
          visibility: "hidden",
        }}
      >
        <ul
          id={id}
          role="menu"
          aria-hidden={!open}
          className={open ? "show" : ""}
          {...rest}
        >
          {children}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
