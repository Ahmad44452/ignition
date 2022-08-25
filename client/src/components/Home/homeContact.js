import React from "react";

const HomeContact = () => {
  return (
    <div className="homeContact">
      <h2 className="homeContact__heading">Contact Us</h2>
      <div className="homeContact__form--container">
        <form className="homeContact__form">
          <div className="homeContact__form--group">
            <input autoComplete="off" type="text" className="homeContact__form--input" placeholder="Full name" id="homeContact__name" />
            <label htmlFor="homeContact__name" className="homeContact__form--label">Full name</label>
          </div>
          <div className="homeContact__form--group">
            <input autoComplete="off" type="email" className="homeContact__form--input" placeholder="Email address" id="homeContact__email" />
            <label htmlFor="homeContact__email" className="homeContact__form--label">Email address</label>
          </div>
          <div className="homeContact__form--group">
            <textarea autoComplete="off" rows={7} type="text" className="homeContact__form--input homeContact__form--textarea" placeholder="Message" id="homeContact__message" />
          </div>
          <div className="homeContact__form--group">
            <button onClick={(e) => e.preventDefault()} className="homeContact__form--submit" type="submit">Send</button>
          </div>
        </form>
      </div>


    </div>
  )
}

export default HomeContact;