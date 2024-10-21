import { useEffect } from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "./layout/DashboardLayout/DashboardLayout";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const rootElement = document.documentElement;

    rootElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Routes>
        <Route path="*" name="Home" element={<DashboardLayout />} />
      </Routes>
    </>
  );
}

export default App;
