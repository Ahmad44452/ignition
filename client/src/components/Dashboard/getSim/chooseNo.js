import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { getNumbersApi } from "../../../store/api/numbersApi";

const ChooseNumber = ({ incState, simNoIndex, setSimNoIndex }) => {
  const dispatch = useDispatch();
  const numbersReducer = useSelector(state => state.numbersReducer);

  const [isLoading, setLoading] = useState(true);
  const [numbers, setNumbers] = useState([]);

  const numberSelected = (index) => {
    setSimNoIndex(index);
  }

  useEffect(() => {

    if (numbersReducer.numbers.length === 0) {
      dispatch(getNumbersApi());
    }

  }, [dispatch, numbersReducer])

  return (
    <>
      {
        numbersReducer && numbersReducer.numbers.length === 0 ? (
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={4}
            strokeWidthSecondary={1}
            color="blue"
            secondaryColor="#fff"
          />
        )
          :
          (
            <div className="chooseno">
              <div className="chooseno__content">
                <h2 className="chooseno__heading">2. Select a number</h2>
                <div className="chooseno__numbers">
                  {
                    numbersReducer.numbers.map((item, index) => (
                      <div className={simNoIndex === index ? "chooseno__number chooseno__number--selected" : "chooseno__number"} key={index} onClick={() => numberSelected(index)}>{item}</div>
                    ))
                  }
                </div>
                {
                  simNoIndex === -1 ? null :
                    (
                      <div className="chooseno__submit--group">
                        <button className="chooseno__submit--button" onClick={e => {
                          e.preventDefault();
                          incState();
                        }}>Next</button>
                      </div>
                    )
                }

              </div>
            </div>
          )
      }
    </>
  )
}

export default ChooseNumber;