/////////////////// CSS STYLES START
import "./styles/mainStyles.scss";
/////////////////////////////////////////
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { authUserApi } from "./store/api/userApi";

import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import MainLayout from "./hoc/MainLayout";


const AppRoutes = () => {

  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const userReducer = useSelector(state => state.userReducer);

  useEffect(() => {

    if (userReducer.auth === null) {
      dispatch(authUserApi()).then(res => {
        setLoading(false);
      })
    }

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