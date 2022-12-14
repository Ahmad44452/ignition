import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import homeBG from "./homeBG.mp4";

const HomeHeader = () => {

  return (
    <div className="homeHeader">
      <div className="homeHeader__video--container">
        <video className="homeHeader__video" autoPlay muted loop>
          <source src={homeBG} type="video/mp4" />
        </video>
      </div>
      <div className="homeHeader__content">
        <h1 className="homeHeader__content--heading">Ignition</h1>
        <Link to={"/login"}><button className="homeHeader__content--button">Step in</button></Link>
      </div>

      <div className="homeHeader__content--scroll">
        <IoIosArrowDown />
      </div>
    </div>
  )
}

export default HomeHeader;