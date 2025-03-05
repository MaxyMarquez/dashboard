import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout/DashboardLayout";
import Login from "@pages/Auth/Login/Login";
import Register from "@pages/Auth/Register/Register";
import useTheme from "@hooks/useTheme";

import "./App.css";

import axios from "axios";
import ProtectedRoutes from "@components/ProtectedRoutes/ProtectedRoutes";

axios.defaults.baseURL = "http://localhost:3000/api"

function App() {
  const { theme } = useTheme();

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" name="Home" element={
          <ProtectedRoutes>
            <DashboardLayout />
          </ProtectedRoutes>
        } />

      </Routes>
    </>
  );
}

export default App;
