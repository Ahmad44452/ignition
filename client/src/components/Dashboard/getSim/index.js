import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

import GetSimForm from "./getSimForm";
import ChooseNumber from "./chooseNo";
import { registerUserNumberApi } from "../../../store/api/userApi";

const GetSim = () => {

  const [stepNo, setStepNo] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const [simNoIndex, setSimNoIndex] = useState(-1);

  const dispatch = useDispatch();
  const numbersReducer = useSelector(state => state.numbersReducer);

  const incState = () => {
    setStepNo(prev => prev + 1);
  }

  const getUserInfo = (info) => {
    setUserInfo(info);

  }

  const getComponentFromStepNo = (step) => {
    if (step === 1) {
      return <GetSimForm incState={incState} getUserInfo={getUserInfo} />
    }
    else if (step === 2) {
      return <ChooseNumber incState={incState} simNoIndex={simNoIndex} setSimNoIndex={setSimNoIndex} />
    } else if (step === 3) {

      dispatch(registerUserNumberApi(userInfo, numbersReducer.numbers[simNoIndex]));

      return <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={4}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="#fff"
      />

    }
  }


  return (
    <div className="getsim">
      <h2 className="getsim__heading">Register No</h2>
      {
        getComponentFromStepNo(stepNo)
      }

    </div>
  )
}

export default GetSim;