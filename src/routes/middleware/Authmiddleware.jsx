import { Navigate, Outlet } from "react-router-dom";

const Authmiddleware = () => {
  if (!localStorage.getItem("authUser")) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default Authmiddleware;
