import React from "react";

const Dashboard = React.lazy(() => import("@pages/Dashboard/Dashboard"));
const EvaluationForm = React.lazy(() => import("@pages/Evaluations/EvaluationForm"));
const Tables = React.lazy(() => import("@pages/Tables"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  {
    path: "/dashboard",
    name: "Dashboard",
    element: Dashboard,
  },
  {
    path: "/evaluations",
    name: "Evaluations",
    element: EvaluationForm,
  },
  {
    path: "/tables",
    name: "Tables",
    element: Tables,
  },
];

export default routes;
