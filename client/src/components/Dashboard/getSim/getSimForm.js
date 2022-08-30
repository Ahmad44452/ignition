import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useFormik } from "formik";
import * as Yup from 'yup';


const GetSimForm = ({ incState, getUserInfo }) => {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      cnic: '',
      address: ''
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required!'),
      cnic: Yup.string().required('CNIC number is required!').matches(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/, "Invalid CNIC"),
      address: Yup.string().required('Address is required!')
    }),
    onSubmit: (values) => {
      getUserInfo(values);
      incState();
    }
  })

  return (

    <form className="getsim__form" onSubmit={formik.handleSubmit}>
      <h2 className="getsim__form--heading">1. Fill Information</h2>
      <div className="getsim__form--group">
        <label className="getsim__form--label">First Name</label>
        <input className={formik.touched.firstname && formik.errors.firstname ? "getsim__form--input getsim__form--input-error" : "getsim__form--input"}
          autoComplete="off" type="text" placeholder="First Name" {...formik.getFieldProps('firstname')} />
      </div>

      <div className="getsim__form--group">
        <label className="getsim__form--label">Last Name</label>
        <input className={formik.touched.lastname && formik.errors.lastname ? "getsim__form--input getsim__form--input-error" : "getsim__form--input"}
          autoComplete="off" type="text" placeholder="Last Name" {...formik.getFieldProps('lastname')} />
      </div>

      <div className="getsim__form--group">
        <label className="getsim__form--label">CNIC Number</label>
        <InputMask className={formik.touched.cnic && formik.errors.cnic ? "getsim__form--input getsim__form--input-error" : "getsim__form--input"}
          mask="99999-9999999-9" autoComplete="off" placeholder="CNIC Number" maskChar="_" {...formik.getFieldProps('cnic')} />
      </div>

      <div className="getsim__form--group">
        <label className="getsim__form--label">Address</label>
        <input className={formik.touched.address && formik.errors.address ? "getsim__form--input getsim__form--input-error" : "getsim__form--input"}
          autoComplete="off" type="text" placeholder="Address" {...formik.getFieldProps('address')} />
      </div>

      <div className="getsim__form--submit-group">
        <button className="getsim__form--button" type="submit">Next</button>
      </div>
    </form>

  )
}

export default GetSimForm;