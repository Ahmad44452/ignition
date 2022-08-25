import React, { useState } from "react";

const Login = () => {

  const [isUserWantLogin, setUserWantLogin] = useState(false);

  const switchUserChoice = () => {
    setUserWantLogin(prev => !prev)
  }

  return (
    <div className="login__container">
      <div className="login">

        <div className="login__signup">
          <form>
            <span onClick={switchUserChoice}
              className={isUserWantLogin ? "login__heading login__heading--signup login__heading--signup--show" : "login__heading login__heading--signup"}
              htmlFor="login__switch" aria-hidden="true"
            >Sign up</span>
            <input className="login__input" type="text" name="username" placeholder="User name" />
            <input className="login__input" type="email" name="email" placeholder="Email" />
            <input className="login__input" type="password" name="password" placeholder="Password" />
            <input className="login__input" type="text" name="address" placeholder="Address" />
            <button className="login__button login__signup--button">Sign up</button>
          </form>
        </div>

        <div
          className={isUserWantLogin ? "login__login login__login--show" : "login__login"}
        >
          <form>
            <span onClick={switchUserChoice}
              className={isUserWantLogin ? "login__heading login__heading--login login__heading--login--show" : "login__heading login__heading--login"}
              htmlFor="login__switch" aria-hidden="true"
            >Login</span>
            <input className="login__input" type="email" name="email" placeholder="Email" />
            <input className="login__input" type="password" name="password" placeholder="Password" />
            <button className="login__button login__login--button">Login</button>
          </form>
        </div>
      </div >
    </div>

  )
}

export default Login;