import React from "react";
import Card from "../../components/Card/Card";

const About = () => {
  const img_urls = ["team-1.jpg", "team-2.jpg", "team-3.jpg", "team-4.jpg"];
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img
              className="img-fluid w-100"
              src="./assets/images/about.jpg"
              alt=""
            />
            <div className="bg-primary text-dark text-center p-4">
              <h3 className="m-0">25+ Years Experience</h3>
            </div>
          </div>
          <div className="col-lg-7">
            <h6 className="text-primary text-uppercase font-weight-bold">
              About Us
            </h6>
            <h1 className="mb-4">Trusted & Faster Logistic Service Provider</h1>
            <p className="mb-4">
              Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
              sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
              dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed
              diam duo
            </p>
            <div className="d-flex align-items-center pt-2">
              <button
                type="button"
                className="btn-play"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-target="#videoModal"
              >
                <span></span>
              </button>
              <h5 className="font-weight-bold m-0 ml-4">Play Video</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid w-100"
                src="./assets/images/feature.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Why Choose Us
              </h6>
              <h1 className="mb-4">
                Faster, Safe and Trusted Logistics Services
              </h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <ul className="list-inline">
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3"></i>Best
                    In Industry
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3"></i>
                    Emergency Services
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3"></i>24/7
                    Customer Support
                  </h6>
                </li>
              </ul>
              <a href="" className="btn btn-primary mt-3 py-2 px-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Delivery Team
            </h6>
            <h1 className="mb-4">Meet Our Delivery Team</h1>
          </div>
          <div className="row">
            {img_urls.map((img_url, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <Card img_url={"./assets/images/team/" + img_url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
