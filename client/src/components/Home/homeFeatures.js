import React from "react";
import { AiOutlineWifi } from "react-icons/ai"
import { GoGlobe } from "react-icons/go";

const HomeFeatures = () => {
  return (
    <div className="homeFeatures">
      <h2 className="homeFeatures__heading">Features</h2>
      <div className="homeFeatures__cards">
        <div className="homeFeatures__card">
          <div className="homeFeatures__card--icon">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="featureLighteningGradient">
                  <stop offset="5%" stopColor="#4ca1af" />
                  <stop offset="95%" stopColor="#2c3e50" />
                </linearGradient>
              </defs>
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
            </svg>
          </div>
          <h3 className="homeFeatures__card--heading">Fast Connectivity</h3>
          <p className="homeFeatures__card--text">With our latest lightening fast technology, you can connect and start enjoying our services in a few milli-seconds!</p>
        </div>

        <div className="homeFeatures__card">
          <div className="homeFeatures__card--icon">
            <AiOutlineWifi />
          </div>
          <h3 className="homeFeatures__card--heading">Low Latency</h3>
          <p className="homeFeatures__card--text">With low latency, enjoy communication, gaming or any other data transfer with almost zero seconds delay!</p>
        </div>

        <div className="homeFeatures__card">
          <div className="homeFeatures__card--icon">
            <GoGlobe />
          </div>
          <h3 className="homeFeatures__card--heading">World Wide Coverage</h3>
          <p className="homeFeatures__card--text">With our network spread throught the world you can enjoy our services anywhere without any additional cost!</p>
        </div>
      </div>
    </div>
  )
}

export default HomeFeatures;