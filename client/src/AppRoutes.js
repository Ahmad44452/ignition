/////////////////// CSS STYLES START
import "./styles/mainStyles.scss";
/////////////////////////////////////////
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import MainLayout from "./hoc/MainLayout";


const AppRoutes = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  )
}

export default AppRoutes;