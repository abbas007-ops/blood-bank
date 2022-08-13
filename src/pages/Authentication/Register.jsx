import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik,ErrorMessage,Field,Form} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { post } from "../../helpers/api_helper";
import { REGISTER } from "../../helpers/url_helper";
import BannerImage from "../../components/bannerImage/BannerImage";


const initialValues = {
  username:'',
  email:'',
  password:'',
  user_type:''
}

const validationSchema = Yup.object({
  username:Yup.string().required('Please enter your full name.'),
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
  user_type:Yup.string().required('Please select user type.')
})


const Register = () => {
  const navigate = useNavigate();
  const onSubmit = async(values) => {
    try {
      console.log("values",values);
      let formdata = new FormData();
      formdata.append("username", values.username);
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      formdata.append("user_type", values.user_type);
      const payload =  formdata;
  
      const response = await post(REGISTER, payload)
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
            navigate('/login');
          },3000);
      }
  
      console.log(response);
  
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
          <h3 className="mb-4">Register</h3>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="form-group">
              <label htmlFor="name">Username *</label>
              <Field type="text" name="username" className="form-control border-0" />
              <div style={{color:'red'}}>
                <ErrorMessage name="username"/>
              </div>
            </div>
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
            <div className="form-group">
              <label htmlFor="website">User Type *</label>
              <Field as="select"
                      name="user_type" 
                      className="custom-select border-0 px-4"
                      style={{ height: "47px" }}>
                      <option>Select User Type</option>
                      <option value="2">User</option>
                      <option value="3">Hospital</option>
                    </Field>
              <div style={{color:'red'}}>
                <ErrorMessage name="user_type"/>
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
    </React.Fragment>
  );
};

export default Register;
