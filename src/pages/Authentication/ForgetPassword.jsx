import React from "react";
import { Formik,ErrorMessage,Field,Form} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { post } from "../../helpers/api_helper";
import { FORGET_PASSWORD } from "../../helpers/url_helper";
import BannerImage from "../../components/bannerImage/BannerImage";

const initialValues = {
  email:'',
}

const validationSchema = Yup.object({
  email:Yup.string().email("Please enter a valid email.").required('Please enter your email.'),
})

const ForgetPassword = () => {

  const onSubmit = async(values) => {
    try {
      console.log("values",values);
      let formdata = new FormData();
      formdata.append("email", values.email);
      const payload =  formdata;
  
      const response = await post(FORGET_PASSWORD, payload)
      console.log(response);
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
    <React.Fragment>
      <BannerImage />
     <ToastContainer />
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
          <h3 className="mb-4">Forgot Password</h3>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>     
          <Form>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <Field
                type="text"
                name="email"
                className="form-control border-0"
              />
               <div style={{color:'red'}}>
                <ErrorMessage name="email"/>
              </div>
            </div>

            <button
              className="btn btn-outline-primary"
              type="submit"
            >
              Submit
            </button>
          </Form>
          </Formik>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default ForgetPassword;
