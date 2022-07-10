import React from "react";
import Hero from "../../components/Hero/Hero";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Hero />
    <div className="container-fluid py-5">
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Get A Quote
              </h6>
              <h1 className="mb-4">Emergency! Request Blood Group </h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    225
                  </h1>
                  <h6 className="font-weight-bold mb-4">Blood Donors</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    1050
                  </h1>
                  <h6 className="font-weight-bold mb-4">People Got Help</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    2500
                  </h1>
                  <h6 className="font-weight-bold mb-4">Completed</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary py-5 px-4 px-sm-5">
                <form className="py-5">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 p-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select border-0 px-4"
                      style={{ height: "47px" }}
                    >
                      <option value="0">Select A Blood Type</option>
                      <option value="1">O+</option>
                      <option value="2">AB+</option>
                      <option value="3">A+</option>
                      <option value="4">B+</option>
                      <option value="5">O-</option>
                      <option value="6">AB-</option>
                      <option value="7">A-</option>
                      <option value="8">B-</option>
                    </select>
                  </div>
                  <div>
                    <button
                      className="btn btn-dark btn-block border-0 py-3"
                      type="submit"
                    >
                      Emergency Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Dashboard;
