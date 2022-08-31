import React from "react";
import { useSelector } from "react-redux";

const SimActivated = () => {

  const userReducer = useSelector(state => state.userReducer);

  return (
    <div className="simactivated">
      <div className="activatesim__sim--container">
        <div className="activatesim__sim">
          <h2 className="activatesim__sim--number">{userReducer.data.simNumber}</h2>
        </div>
      </div>
      <div className="simactivated__content">
        <h3 className="simactivated__content--top">The above number is registered to <span className="simactivated__content--bold">{userReducer.data.firstname} {userReducer.data.lastname}</span></h3>
        <h4 className="simactivated__content--text"><span className="simactivated__content--bold">Email:</span> {userReducer.data.email}</h4>
        <h4 className="simactivated__content--text"><span className="simactivated__content--bold">CNIC:</span> {userReducer.data.cnic}</h4>
        <h4 className="simactivated__content--text"><span className="simactivated__content--bold">Address:</span> {userReducer.data.address}</h4>
      </div>
    </div>
  )
}

export default SimActivated;