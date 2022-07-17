import { Routes, Route } from "react-router-dom";
import Authmiddleware from "./middleware/Authmiddleware";

//User Routes
import Dashboard from "../pages/Dashboard/Dashboard";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

//Public Routes
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import LandingPage from "../pages/LandingPage/LandingPage";
import ForgetPassword from "../pages/Authentication/ForgetPassword";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ResetPassword from "../pages/Authentication/ResetPassword";

const AllRoutes = () => {
  return (
    <Routes>
      {/* User Routes */}
      <Route element={<Authmiddleware />}>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact-us" element={<Contact />} />
      </Route>

      {/* Public Routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgetPassword />} />
      <Route path="/about" element={<About />} />
      <Route path='/reset_password/:token' element={<ResetPassword />}  />
      <Route path="/" element={<LandingPage />} exact />
      

      {/* TODO 404 Page */}
    </Routes>
  );
};

export default AllRoutes;
