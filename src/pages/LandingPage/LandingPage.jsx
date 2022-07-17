import React from "react";
import BloodRequest from "../../components/BloodRequest/BloodRequest";
import Hero from "../../components/Hero/Hero";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Hero />
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img
              className="img-fluid w-100"
              src="./assets/images/images.jpg"
              alt=""
            />
            <div className="bg-primary text-dark text-center p-4">
              <h3 className="m-0">25+ Years Experience</h3>
            </div>
          </div>
          <div className="col-lg-7">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Get Updates
            </h6>
            <h1 className="mb-4">
              Daily News on Blood Camps And organisations Culture
            </h1>
            <p className="mb-4">
              Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
              sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
              dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed
              diam duo
            </p>
          </div>
        </div>
      </div>
      <BloodRequest />
    </div>
    </React.Fragment>
  );
};

export default LandingPage;
