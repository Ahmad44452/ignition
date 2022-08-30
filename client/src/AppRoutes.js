/////////////////// CSS STYLES START
import "./styles/mainStyles.scss";
/////////////////////////////////////////
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Oval } from "react-loader-spinner";


import { authUserApi } from "./store/api/userApi";

import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import MainLayout from "./hoc/MainLayout";


const AppRoutes = () => {

  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUserApi()).then(res => {
      setLoading(false);
    })

  }, [dispatch])

  return (
    <MainLayout>
      {
        isLoading ?
          (
            <div className="mainpageloader__container">
              <div className="mainpageloader">Loading...</div>
            </div>
          )
          :
          (
            <BrowserRouter>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          )
      }

    </MainLayout>
  )
}

export default AppRoutes;