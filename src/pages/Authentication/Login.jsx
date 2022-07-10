import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik,ErrorMessage,Field,Form} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { post } from "../../helpers/api_helper";
import { LOGIN } from "../../helpers/url_helper";
import BannerImage from "../../components/bannerImage/BannerImage";

const initialValues = {
  email:'',
  password:''
}

const validationSchema = Yup.object({
  password:Yup.string().required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .max(25)
      .matches(/^(?=.{6,})/, "Must Contain 6 Characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        "Must Contain One Uppercase, One Lowercase"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "Must Contain One Special Case Character"
      )
      .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number").required('Please enter your password.'),
  email:Yup.string().email("Please enter a valid email.").required('Please enter your email.'),
})



const Login = () => {
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    try {
      console.log("values",values);
      let formdata = new FormData();
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      const payload =  formdata;
  
      const response = await post(LOGIN, payload)
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
          
          

          setTimeout(function(){
            window.location.href = "http://localhost:3000/"
          },3000);
      }
      localStorage.setItem("authUser", JSON.stringify(response.data));
  
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
          <h3 className="mb-4">Login</h3>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>     
          <Form>
            <div className="form-group">
              <label htmtFor="name">Email</label>
              <Field
                type="text"
                name="email"
                className="form-control border-0"
              />
               <div style={{color:'red'}}>
                <ErrorMessage name="email"/>
              </div>
            </div>

            <div className="form-group">
              <label htmtFor="email">Password</label>
              <Field
                type="password"
                name="password"
                className="form-control border-0"
              />
               <div style={{color:'red'}}>
                <ErrorMessage name="password"/>
              </div>
            </div>

            <button
              className="btn btn-outline-primary"
              type="submit"
            >
              Login
            </button>
            &nbsp;&nbsp;
            <Link to="/forgot-password">Forgot Password?</Link>
          </Form>
          </Formik>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Login;
