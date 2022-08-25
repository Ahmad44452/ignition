import React from "react";

import HomeHeader from "./homeHeader";
import HomeFeatures from "./homeFeatures";
import HomeContact from "./homeContact";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeFeatures />
      <HomeContact />
    </div>
  )
}

export default Home;