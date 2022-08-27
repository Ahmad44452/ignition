import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUserApi, signInUserApi } from "../../store/api/userApi";
import showToast from "../../utils/showToast";


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userReducer = useSelector(state => state.userReducer);

  const [isUserWantLogin, setUserWantLogin] = useState(false);

  const [isShowPassword, setShowPassword] = useState({
    signupPass: false,
    signupConfirmPass: false,
    loginPass: false
  })

  const switchUserChoice = () => {
    setUserWantLogin(prev => !prev)
  }

  const switchShowPassword = (val) => {
    setShowPassword(prev => ({
      ...prev,
      [val]: !prev[val]
    }))
  }

  const formikSignup = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required!').email(),
      password: Yup.string().required('Password is required!'),
      confirmPassword: Yup.string().required('Password is required!')
    }),
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        showToast('error', 'Password and confirm password are not same!');
      } else {
        dispatch(registerUserApi(values.email, values.password));
      }
    }
  })

  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required!').email(),
      password: Yup.string().required('Password is required!')
    }),
    onSubmit: (values) => {
      dispatch(signInUserApi(values.email, values.password));
    }
  })

  useEffect(() => {
    if (userReducer.auth === true) {
      navigate('/dashboard');
    }
  }, [userReducer])

  return (
    <div className="login__container">
      <div className="login">

        <div className="login__signup">

          <form onSubmit={formikSignup.handleSubmit}>
            <span onClick={switchUserChoice}
              className={isUserWantLogin ? "login__heading login__heading--signup login__heading--signup--show" : "login__heading login__heading--signup"}
              htmlFor="login__switch" aria-hidden="true"
            >Sign up</span>

            <div>
              <div className="login__input--container">
                <input className={formikSignup.touched.email && formikSignup.errors.email ? "login__input login__input--error" : "login__input"} type="email" name="email"
                  placeholder="Email" autoComplete="off" {...formikSignup.getFieldProps('email')} />
              </div>
              <div className="login__input--container">
                <input className={formikSignup.touched.password && formikSignup.errors.password ? "login__input login__input--error" : "login__input"}
                  type={isShowPassword.signupPass ? "text" : "password"} name="password" placeholder="Password" autoComplete="off" {...formikSignup.getFieldProps('password')} />
                <span className="login__input--eye" onClick={() => switchShowPassword('signupPass')}>
                  {
                    isShowPassword.signupPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                  }

                </span>
              </div>
              <div className="login__input--container">

                <input className={formikSignup.touched.confirmPassword && formikSignup.errors.confirmPassword ? "login__input login__input--error" : "login__input"}
                  type={isShowPassword.signupConfirmPass ? "text" : "password"} name="confirmPassword"
                  placeholder="Confirm Password" autoComplete="off"{...formikSignup.getFieldProps('confirmPassword')} />

                <span className="login__input--eye" onClick={() => switchShowPassword('signupConfirmPass')}>
                  {
                    isShowPassword.signupConfirmPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                  }
                </span>
              </div>
            </div>

            <button className="login__button login__signup--button" type="submit">Sign up</button>
          </form>
        </div>

        <div className={isUserWantLogin ? "login__login login__login--show" : "login__login"}>
          <form onSubmit={formikLogin.handleSubmit}>
            <span onClick={switchUserChoice}
              className={isUserWantLogin ? "login__heading login__heading--login login__heading--login--show" : "login__heading login__heading--login"}
              htmlFor="login__switch" aria-hidden="true"
            >Login</span>
            <div>
              <div className="login__input--container">
                <input className={formikLogin.touched.email && formikLogin.errors.email ? "login__input login__input--error" : "login__input"}
                  type="email" name="email" placeholder="Email" {...formikLogin.getFieldProps('email')} autoComplete="off" />
              </div>
              <div className="login__input--container">
                <input className={formikLogin.touched.password && formikLogin.errors.password ? "login__input login__input--error" : "login__input"}
                  type={isShowPassword.loginPass ? "text" : "password"}
                  name="password" placeholder="Password" {...formikLogin.getFieldProps('password')} />
                <span className="login__input--eye" onClick={() => switchShowPassword('loginPass')}>
                  {
                    isShowPassword.loginPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                  }

                </span>
              </div>
            </div>
            <button className="login__button login__login--button" type="submit">Login</button>
          </form>
        </div>
      </div >
    </div>

  )
}

export default Login;