import { useSelector } from "react-redux";
import Sidebar from "@components/Sidebar/Sidebar";
import Navbar from "@components/Navbar/Navbar";
import Content from "@components/Content/Content";

import "./DashboardLayout.css";

const DashboardLayout = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  return (
    <>
      <div className={`dashboard-layout ${isOpen ? "open" : "closed"}`}>
        <Sidebar />
        <div className="dashboard-content">
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
