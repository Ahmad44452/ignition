import React from "react";
import { Link } from "react-router-dom";

const HomeJoin = () => {
  return (
    <div className="homeJoin">
      <Link to={"/login"}>
        <button className="homeJoin__button">Join Us</button>
      </Link>
    </div >
  )
}

export default HomeJoin;