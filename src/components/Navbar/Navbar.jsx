import { toggleMenu } from "@store/slices/menuSlice";
import { useDispatch } from "react-redux";
import BurgerIcon from "@assets/icons/BurguerIcon";

import "./Navbar.css";

import Dropdown from "@components/Dropdown/Dropdown";
import DropdownItem from "@components/Dropdown/DropdownItem";
import Button from "@components/Button/Button";
import { useState } from "react";
import { setTheme } from "@store/slices/themeSlice";
import Avatar from "@components/Avatar/Avatar";
import { useSelector } from "react-redux";
import useTheme from "@hooks/useTheme";

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const { theme, toggleTheme } = useTheme();

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="navbar-container">
        <Button className="navbar-btn" onClick={() => dispatch(toggleMenu())}>
          <BurgerIcon className="nav-icon" />
        </Button>
        <div></div>
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
            <DropdownItem onClick={toggleTheme}>Dark Mode</DropdownItem>
            <DropdownItem onClick={toggleTheme}>Light</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
