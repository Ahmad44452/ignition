import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const HomeContact = () => {

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Name is required!"),
      email: Yup.string().required("Email is required!").email(),
      message: Yup.string().required("Message is required!")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className="homeContact">
      <h2 className="homeContact__heading">Contact Us</h2>
      <div className="homeContact__form--container">
        <form className="homeContact__form" onSubmit={formik.handleSubmit}>
          <div className="homeContact__form--group">
            <input autoComplete="off" type="text"
              className={formik.touched.fullName && formik.errors.fullName ? "homeContact__form--input homeContact__form--input--error" : "homeContact__form--input"}
              placeholder="Full name" id="homeContact__name" {...formik.getFieldProps('fullName')} />
            <label htmlFor="homeContact__name" className="homeContact__form--label">Full name</label>
          </div>
          <div className="homeContact__form--group">
            <input autoComplete="off" type="email"
              className={formik.touched.email && formik.errors.email ? "homeContact__form--input homeContact__form--input--error" : "homeContact__form--input"}
              placeholder="Email address" id="homeContact__email" {...formik.getFieldProps('email')} />
            <label htmlFor="homeContact__email" className="homeContact__form--label">Email address</label>
          </div>
          <div className="homeContact__form--group">
            <textarea autoComplete="off" rows={7} type="text"
              className={formik.touched.message && formik.errors.message ? "homeContact__form--input homeContact__form--textarea homeContact__form--input--error" : "homeContact__form--input homeContact__form--textarea"}
              placeholder="Message" id="homeContact__message" {...formik.getFieldProps('message')} />
          </div>
          <div className="homeContact__form--group">
            <button className="homeContact__form--submit" type="submit">Send</button>
          </div>
        </form>
      </div>


    </div>
  )
}

export default HomeContact;