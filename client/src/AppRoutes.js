/////////////////// CSS STYLES START
import "./styles/mainStyles.scss";
/////////////////////////////////////////
import React from "react";
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./components/Home";
import Login from "./components/Login";

import MainLayout from "./hoc/MainLayout";

export const historyObject = createBrowserHistory({ window });

const AppRoutes = () => {
  return (
    <MainLayout>
      <HistoryRouter history={historyObject}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HistoryRouter>
    </MainLayout>
  )
}

export default AppRoutes;