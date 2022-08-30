import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";

import { signOutUserApi } from "../../store/api/userApi";

import GetSim from "./getSim";
import ActivateSim from "./activatesim";
import SimActivated from "./simactivated";

const Dashboard = () => {

  const dispatch = useDispatch();

  const userReducer = useSelector(state => state.userReducer);
  const navigate = useNavigate();

  const signOutUser = () => {
    dispatch(signOutUserApi()).then(() => {
      navigate('/');
    })
  }

  useEffect(() => {
    if (userReducer.auth !== true) {
      navigate('/login');
    }
  }, [userReducer]);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>Welcome {userReducer.data.firstname || userReducer.data.email}!</h1>
        <div onClick={signOutUser} className="dashboard__header--signout"><span>Sign out</span><AiOutlinePoweroff /></div>
      </div>

      <div className="dashboard__content">
        {
          userReducer && userReducer.data.simStatus === 'notAlloted' ? <GetSim /> :
            (
              userReducer && userReducer.data.simStatus === 'unactivated' ? <ActivateSim /> : <SimActivated />
            )
        }
      </div>
    </div>
  )
}

export default Dashboard;