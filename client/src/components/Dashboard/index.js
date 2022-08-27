import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const userReducer = useSelector(state => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (userReducer.auth !== true) {
      navigate('/login');
    }
  }, [userReducer]);

  return (
    <h1>Dashboard goes brrrrrrrrr</h1>
  )
}

export default Dashboard;