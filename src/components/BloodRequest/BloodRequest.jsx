import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Formik,ErrorMessage,Field,Form} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { post } from "../../helpers/api_helper";
import { REQUEST_BLOOD } from "../../helpers/url_helper";


const initialValues = {
  email:'',
  name:'',
  city:'',
  blood_group:''
}

const validationSchema = Yup.object({
  name:Yup.string().required('Please enter name.'),
  city:Yup.string().required('Please enter city.'),
  email:Yup.string().email("Please enter a valid email.").required('Please enter your email.'),
  blood_group:Yup.string().required('Please select blood group.')
})



const BloodRequest = () => {
  const onSubmit = async (values) => {
    
    try {
      
      let formdata = new FormData();
      formdata.append("name", values.name);
      formdata.append("email", values.email);
      formdata.append("blood_group", values.blood_group);
      formdata.append("city", values.city);
      const payload =  formdata;
  
      const response = await post(REQUEST_BLOOD, payload)
      
      if(response)
      {
        toast.success(response.message,{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <ToastContainer />
    <div className="container-fluid py-5">
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Get A Quote
              </h6>
              <h1 className="mb-4">Emergency! Request Blood Group </h1>
              <p className="mb-4">
                Now get the requested blood on a single click....
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    225
                  </h1>
                  <h6 className="font-weight-bold mb-4">Blood Donors</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    1050
                  </h1>
                  <h6 className="font-weight-bold mb-4">People Got Help</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    2500
                  </h1>
                  <h6 className="font-weight-bold mb-4">Completed</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary py-5 px-4 px-sm-5">
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>     
                <Form className="py-5">
                {/* <form className="py-5"> */}
                  <div className="form-group">
                    <Field
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Your Name"
                      name='name'
                    />
                    <div style={{color:'red'}}>
                        <ErrorMessage name="name"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <Field
                      type="email"
                      className="form-control border-0 p-4"
                      placeholder="Your Email"
                      name='email'
                    />
                    <div style={{color:'red'}}>
                        <ErrorMessage name="email"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Your City"
                      name='city'
                    />
                    <div style={{color:'red'}}>
                        <ErrorMessage name="city"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <Field as="select"
                      name="blood_group" 
                      className="custom-select border-0 px-4"
                      style={{ height: "47px" }}>
                    <option value="0">Select A Blood Type</option>
                      <option value="O+">O+</option>
                      <option value="AB+">AB+</option>
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="O-">O-</option>
                      <option value="AB-">AB-</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                    </Field>
                  </div>
                  <div>
                    <button
                      className="btn btn-dark btn-block border-0 py-3"
                      type="submit"
                    >
                      Emergency Request
                    </button>
                  </div>
                </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BloodRequest