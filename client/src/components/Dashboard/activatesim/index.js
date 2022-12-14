import React from "react";
import { useSelector } from "react-redux";


const ActivateSim = () => {

  const userReducer = useSelector(state => state.userReducer);


  return (
    <div className="activatesim">
      <div className="activatesim__content">
        <h3 className="activatesim__content--heading">Activate sim by clicking the button or scanning the given QR code.</h3>
      </div>
      <div className="activatesim__sim--container">
        <div className="activatesim__sim">
          <h2 className="activatesim__sim--number">{userReducer.data.simNumber}</h2>
        </div>
      </div>

      <div className="activatesim__qr--container">
        <a href={`/api/user/activatesim/${userReducer.data._id}`}
          className="activatesim__qr--button" target={"_blank"} rel="noreferrer" alt="QR Code">Activate</a>
        <div className="activatesim__qr">
          <img src={`http://api.qrserver.com/v1/create-qr-code/?data=${window.location.hostname}/api/user/activatesim/${userReducer.data._id}&size=150x150`} />
        </div>
      </div>
    </div>
  )
}

export default ActivateSim;