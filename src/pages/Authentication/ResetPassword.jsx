import React from "react";
import { Formik,ErrorMessage,Field,Form} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams,useSearchParams,useLocation } from "react-router-dom";
import { useEffect } from "react";
import { post } from '../../helpers/api_helper';
import { RESET_PASSWORD } from '../../helpers/url_helper';

const initialValues = {
  new_password:'',
  confirm_password:''
}

const validationSchema = Yup.object({
   new_password:Yup.string()
  .required("New Password is required")
  .min(8, "Password must be at least 8 characters")
  .max(40, "Password must not exceed 40 characters")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  confirm_password:Yup.string()
  .required("Confirm Password is required")
  .oneOf(
    [Yup.ref("new_password"), null],
    "Password and Confirm Password should be the same"
  )
})


const ResetPassword = () => {
    const { token } = useParams();
 
    const onSubmit = async (values) => {
 
      try {

        let formdata = new FormData();
        formdata.append("password", values.confirm_password);
        formdata.append("token", token);
        const payload =  formdata;
    
        const response = await post(RESET_PASSWORD, payload)
        console.log(response);
        // return;
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
          
         <ToastContainer />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
              <h3 className="mb-4">Reset Password</h3>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>     
              <Form>
                <div className="form-group">
                  <label htmlFor="name">New Password</label>
                  <Field
                    type="password"
                    name="new_password"
                    className="form-control border-0"
                  />
                   <div style={{color:'red'}}>
                    <ErrorMessage name="new_password"/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirm_password"
                    className="form-control border-0"
                  />
                   <div style={{color:'red'}}>
                    <ErrorMessage name="confirm_password"/>
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

export default ResetPassword