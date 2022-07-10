import React from "react";
import {  } from "react-router-dom";
import { Formik,ErrorMessage,Field,Form} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { post } from "../../helpers/api_helper";
import { REGISTER } from "../../helpers/url_helper";


const initialValues = {
  // name:'',
  email:'',
  password:''
}

const validationSchema = Yup.object({
  // name:Yup.string().required('Please enter your full name'),
  password:Yup.string().required('Please enter your password'),
  email:Yup.string().email("Please enter a valid email").required('Please enter your email'),
})

const onSubmit = async(values) => {
  try {
    console.log("values",values);
    let formdata = new FormData();
    formdata.append("email", values.email);
    formdata.append("password", values.password);
    const payload =  formdata;

    const response = await post(REGISTER, payload)

    console.log(response);

  } catch (error) {
    console.log(error);
  }
}
const Register = () => {
  return (
    <>
    <ToastContainer />
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
          <h3 className="mb-4">Register</h3>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            {/* <div className="form-group">
              <label htmlFor="name">Name *</label>
              <Field type="text" name="name" className="form-control border-0" />
              <div style={{color:'red'}}>
                <ErrorMessage name="name"/>
              </div>
            </div> */}
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <Field type="email" name="email" className="form-control border-0" />
              <div style={{color:'red'}}>
                <ErrorMessage name="email"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="website">Password *</label>
              <Field type="password" name="password" className="form-control border-0" />
              <div style={{color:'red'}}>
                <ErrorMessage name="password"/>
              </div>
            </div>

            <div className="form-group mb-0">
              <button
                type="submit"
                className="btn btn-primary font-weight-semi-bold py-2 px-3">
                Register   
              </button>
            </div>
          </Form>
          </Formik>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
