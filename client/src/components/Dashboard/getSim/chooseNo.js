import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { getNumbersApi } from "../../../store/api/numbersApi";

const ChooseNumber = () => {
  const dispatch = useDispatch();
  const numbersReducer = useSelector(state => state.numbersReducer);

  const [isLoading, setLoading] = useState(true);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {

    if (numbersReducer && numbersReducer.numbers.length === 0) {
      dispatch(getNumbersApi()).then(() => setLoading(false))
    }

  }, [dispatch])

  return (
    <>
      {
        isLoading === true ? (<Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={4}
          strokeWidthSecondary={1}
          color="blue"
          secondaryColor="#fff"
        />)
          :
          (
            <div className="chooseno">
              <div className="chooseno__content">
                <h2 className="chooseno__heading">Choose one of the following number</h2>
                <div className="chooseno__numbers">
                  {
                    numbersReducer.numbers.map((item, index) => (
                      <div className="chooseno__number" key={index}>{item}</div>
                    ))
                  }
                </div>
              </div>
            </div>

          )
      }
    </>
  )
}

export default ChooseNumber;