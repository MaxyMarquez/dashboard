import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Sidebar.css";
import { toggleMenu, openMenu, closeMenu } from "@store/slices/menuSlice";
import DashboardIcon from "@assets/icons/DashboardIcon";
import Tooltip from "@components/Tooltip/Tooltip";
import { NavLink } from "react-router-dom";
import Button from "@components/Button/Button";
import BurgerIcon from "@assets/icons/BurguerIcon";
import CrossIcon from "@assets/icons/CrossIcon";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const handleResize = () => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop) {
      dispatch(openMenu());
    } else {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const navItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: <DashboardIcon className="sidebar-icon" />,
      link: "/dashboard",
    },
    {
      id: 2,
      label: "Tables",
      icon: <DashboardIcon className="sidebar-icon" />,
      link: "/tables",
    },
    {
      id: 3,
      label: "Settings",
      icon: <DashboardIcon className="sidebar-icon" />,
      link: "/settings",
    },
    {
      id: 4,
      label: "Profile",
      icon: <DashboardIcon className="sidebar-icon" />,
      link: "/profile",
    },
    {
      id: 5,
      label: "Notifications",
      icon: <DashboardIcon className="sidebar-icon" />,
      link: "/notifications",
    },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <header className={`sidebar-header ${isOpen ? "open" : "close"}`}>
          <span className={`sidebar-logo ${isOpen ? "close" : "open"}`}>
            logo
          </span>
          <Button
            className="sidebar-btn-close"
            onClick={() => dispatch(toggleMenu())}
          >
            {isOpen ? (
              <CrossIcon className="sidebar-btn-icon" />
            ) : (
              <BurgerIcon className="sidebar-btn-icon" />
            )}
          </Button>
        </header>

        <div className="sidebar-content">
          <ul className="sidebar-links">
            {navItems.map((item) => (
              <Tooltip key={item.id} text={item.label} right disabled={isOpen}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? "active" : ""} ${
                      isOpen ? "open" : "closed"
                    }`
                  }
                  onClick={() => {
                    const isMobile =
                      !window.matchMedia("(min-width: 768px)").matches;
                    if (isMobile) {
                      handleCloseMenu();
                    }
                  }}
                >
                  <div className="sidebar-item">
                    {item.icon}
                    {isOpen && <span>{item.label}</span>}
                  </div>
                </NavLink>
              </Tooltip>
            ))}
          </ul>
          <Tooltip text="Salir" right disabled={isOpen}>
            <div className="sidebar-link">
              <div className="sidebar-item">
                <div className="sidebar-icon">@</div>
                {isOpen && <span>Salir</span>}
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
      {isOpen && (
        <div className="overlay" onClick={() => dispatch(toggleMenu())}></div>
      )}
    </>
  );
};

export default Sidebar;
