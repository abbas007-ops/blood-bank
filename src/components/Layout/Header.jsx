import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { user as login } from "../../helpers/api_helper";
import UserDropdown from "../dropdown/UserDropdown";

const Header = () => {
  const [userData ,setUserData] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(login);
  const [toggleNav, setToggleNav] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    setUser(undefined);
  };

  useEffect(() => {
    let localdata = localStorage.getItem("authUser");
    setUserData(JSON.parse(localdata));
  },[])
  console.log(userData);
  return (
    <React.Fragment>
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small>
                <i className="fa fa-phone-alt mr-2"></i>+012 345 6789
              </small>
              <small className="px-3">|</small>
              <small>
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-white px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-white pl-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navbar-brand ml-lg-3">
            <h4 className="m-0 text-uppercase text-primary">
              <img
                src="/favicon.png"
                className="d-inline-block mx-2 rounded-circle"
                width="50px"
                height="50px"
              />
              Blood Bank
            </h4>
          </Link>
          <button
            onClick={() => setToggleNav(!toggleNav)}
            type="button"
            className={"navbar-toggler" + (toggleNav ? "" : " collapsed")}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              "collapse navbar-collapse justify-content-between px-lg-3" +
              (toggleNav ? " show" : "")
            }
          >
            <div className="navbar-nav m-auto py-0">
              {user ? (
                <>
                  <NavLink to="/home" className="nav-item nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/donate_blood" className="nav-item nav-link">
                    Donate Blood
                  </NavLink>
                  <NavLink to="contact-us" className="nav-item nav-link">
                    Contact US
                  </NavLink>
                </>
              ) : null}
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
            </div>
            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className=" btn btn-outline-primary py-2 px-4 d-none d-lg-block"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-outline-primary py-2 px-4 d-none d-lg-block"
                >
                  Register
                </NavLink>
              </>
            ) : null}
            {user ? (
              // <div
              //  className="nav-item nav-link btn btn-outline-primary py-2 px-4 d-none d-lg-block rounded"
              // >
                <UserDropdown name={userData.email}/>
              // </div>
            ) : null}
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
