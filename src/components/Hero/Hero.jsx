import React from "react";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/capatatilize";

const Hero = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3 mb-5">
            {capitalizeFirstLetter(location.pathname.replace("/", ""))}
          </h1>
          <div className="mx-auto" style={{ width: "100%", maxWidth: "600px" }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "30px" }}
                placeholder=""
              />
              <div className="input-group-append">
                <button className="btn btn-primary px-4">
                  NearBy Blood donation Camps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
