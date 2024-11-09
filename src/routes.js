import React from "react";

const Dashboard = React.lazy(() => import("@pages/Dashboard"));
const Settings = React.lazy(() => import("@pages/Settings"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  {
    path: "/dashboard",
    name: "Dashboard",
    element: Dashboard,
  },
  {
    path: "/settings",
    name: "Settings",
    element: Settings,
  },
  {
    path: "/analitycs",
    name: "Analitycs",
    element: Settings,
  },
];

export default routes;
