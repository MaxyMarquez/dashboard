import { toggleMenu } from "@store/slices/menuSlice";
import { useDispatch } from "react-redux";
import BurgerIcon from "@assets/icons/MenuIcon";

import "./Navbar.css";
import PaletteIcon from "@assets/icons/PaletteIcon";
import SettingsIcon from "@assets/icons/SettingsIcon";
import Dropdown from "@components/Dropdown/Dropdown";
import DropdownItem from "@components/Dropdown/DropdownItem";
import Button from "@components/Button/Button";
import { useState } from "react";
import { setTheme } from "@store/slices/themeSlice";
import Avatar from "@components/Avatar/Avatar";

const Navbar = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleThemeLight = () => {
    dispatch(setTheme("light"));
    setAnchorEl(null);
  };

  const handleThemeDark = () => {
    dispatch(setTheme("dark"));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="navbar-container">
        <button
          className="nav-sidebar-btn"
          onClick={() => dispatch(toggleMenu())}
        >
          <BurgerIcon className="nav-icon" />
        </button>
        <div className="nav-items-right">
          <Button>Hola</Button>
          <Button
            id="custom-button"
            aria-controls={open ? "custom-dropdown" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="blue"
            variant="circle"
          >
            <Avatar />
          </Button>

          <Dropdown
            id="custom-dropdown"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            <DropdownItem onClick={handleThemeDark}>Dark Mode</DropdownItem>
            <DropdownItem onClick={handleThemeLight}>Light</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
