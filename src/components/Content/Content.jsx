import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes";

import "./Content.css";

const Content = () => {
  return (
    <>
      <div className="content-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => {
              return (
                route.element && (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              );
            })}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default Content;
