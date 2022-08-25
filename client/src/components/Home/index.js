import React from "react";

import HomeHeader from "./homeHeader";
import HomeFeatures from "./homeFeatures";
import HomeContact from "./homeContact";
import HomeJoin from "./homeJoin";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeFeatures />
      <HomeContact />
      <HomeJoin />
    </div>
  )
}

export default Home;