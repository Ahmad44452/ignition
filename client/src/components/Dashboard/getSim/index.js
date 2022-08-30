import React, { useState } from "react";


import GetSimForm from "./getSimForm";
import ChooseNumber from "./chooseNo";

const GetSim = () => {

  const [stepNo, setStepNo] = useState(1);
  const [userInfo, setUserInfo] = useState({});

  const incState = () => {
    setStepNo(prev => prev + 1);
  }

  const getUserInfo = (info) => {
    setUserInfo(info);
  }

  const getComponentFromStepNo = (step) => {
    if (step === 1)
      return <GetSimForm incState={incState} getUserInfo={getUserInfo} />
    else if (step === 2)
      return <ChooseNumber incState={incState} />
  }


  return (
    <div className="getsim">
      <h2 className="getsim__heading">Get a Sim</h2>
      {
        getComponentFromStepNo(stepNo)
      }

    </div>
  )
}

export default GetSim;