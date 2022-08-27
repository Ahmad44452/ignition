/////////////////// CSS STYLES START
import "./styles/mainStyles.scss";
/////////////////////////////////////////
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import cookie from 'react-cookies';

import { authUserApi } from "./store/api/userApi";

import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import MainLayout from "./hoc/MainLayout";


const AppRoutes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUserApi());

  }, [dispatch])

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