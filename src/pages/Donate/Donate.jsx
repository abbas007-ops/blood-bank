import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik,ErrorMessage,Field,Form} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { get } from "../../helpers/api_helper";
import { post } from "../../helpers/api_helper";
import { GET_USER_PROFILE } from "../../helpers/url_helper";
import { UPDATE_USER } from "../../helpers/url_helper";
import BannerImage from "../../components/bannerImage/BannerImage";



const DonateBlood = () => {
  const navigate = useNavigate();
  const [userData ,setUserData] = useState(()=>
  {
    const saved = localStorage.getItem("authUser");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [user ,setUser] = useState("")
  let userId;
  useEffect(() => {
    getUser(userData.user_id);
  },[userData])

  const getUser = async (userId) => {
    console.log(userId);
    try{
      let response = await get(GET_USER_PROFILE(userId));
      
      setUser(response.data);
    }catch(error){
      console.log(error);
    }
  }
  console.log(user.user_name);
  
  const initialValues = {
    full_name:user.full_name,
    user_name:user.user_name,
    email:user.email,
    contact_number:user.contact_number,
    blood_group:user.blood_group
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    full_name:Yup.string().required('Please enter your full name.'),
    user_name:Yup.string().required('Please enter your user name.'),
    blood_group:Yup.string().required('Please enter your blood group.'),
    contact_number:Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, 'Phone no should be min 10 digits').max(12, 'Phone no should be max 12 digits').required("Please enter your contact number"),
    email:Yup.string().email("Please enter a valid email.").required('Please enter your email.'),
  })

  
  const onSubmit = async (values) => {
    try{

      let formData = new FormData();
        formData.append("fullname",values.full_name);
        formData.append("user_name",values.user_name);
        formData.append("blood_group",values.blood_group);
        formData.append("contact_number",values.contact_number);
        formData.append("userId",user.user_id);
        const payload =  formData;
        
        const response = await post(UPDATE_USER, payload)
        console.log(response);
        // return;
      if(response){

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
            navigate("/home");
          },3000);
      }
    }catch(error){
      toast.error("Something went wrong",{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
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
          <h3 className="mb-4">Blood Donation Form</h3>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>     
          <Form>
            <div className="form-group">
              <label htmtfor="name">User name</label>
              <Field
                type="text"
                name="user_name"
                className="form-control border-0"
              />
               <div style={{color:'red'}}>
                <ErrorMessage name="user_name"/>
              </div>
            </div>
            <div className="form-group">
              <label htmtfor="name">Full Name</label>
              <Field
                type="text"
                name="full_name"
                className="form-control border-0"
              />
               <div style={{color:'red'}}>
                <ErrorMessage name="full_name"/>
              </div>
            </div>
            <div className="form-group">
              <label htmtfor="name">Contact Number</label>
              <Field
                type="text"
                name="contact_number"
                className="form-control border-0"
              />
               <div style={{color:'red'}}>
                <ErrorMessage name="contact_number"/>
              </div>
            </div>
            <div className="form-group">
              <label htmtfor="name">Email</label>
              <Field
                type="text"
                name="email"
                className="form-control border-0"
                disabled
              />
               <div style={{color:'red'}}>
                <ErrorMessage name="email"/>
              </div>
            </div>
            <div className="form-group">
              <label htmtfor="name">City</label>
              <Field
                type="text"
                name="city"
                className="form-control border-0"
              />
               <div style={{color:'red'}}>
                <ErrorMessage name="city"/>
              </div>
            </div>
            <div className="form-group">
              <label htmtfor="name">Hospitals</label>
              <Field as="select"
                      name="blood_group" 
                      className="custom-select border-0 px-4"
                      style={{ height: "47px" }}>
                      <option value="Suyash Hospital">Suyash Hospital</option>
                      <option value="Neptune Hospital">Neptune hospital</option>
                      <option value="Sai Hospital">Sai Hospital</option>
                    </Field>
               <div style={{color:'red'}}>
                <ErrorMessage name="blood_group"/>
              </div>
            </div>
            <div className="form-group">
              <label htmtfor="name">Blood Group</label>
              <Field as="select"
                      name="blood_group" 
                      className="custom-select border-0 px-4"
                      style={{ height: "47px" }}>
                      <option value="O+">O+</option>
                      <option value="AB+">AB+</option>
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="O-">O-</option>
                      <option value="AB-">AB-</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                    </Field>
               <div style={{color:'red'}}>
                <ErrorMessage name="blood_group"/>
              </div>
            </div>

           

            <button
              className="btn btn-outline-primary"
              type="submit"
            >
              Donate now
            </button>
            
          </Form>
          </Formik>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};
export default DonateBlood;
