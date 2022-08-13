import React from "react";

const Card = ({ img_url }) => {
  return (
    <div className="team card position-relative overflow-hidden border-0 mb-5">
      <img className="card-img-top" src={img_url} alt="" />
      {/* <div className="card-body text-center p-0">
        <div className="team-text d-flex flex-column justify-content-center bg-secondary">
          <h5 className="font-weight-bold">Full Name</h5>
          <span>Designation</span>
        </div>
        <div className="team-social d-flex align-items-center justify-content-center bg-primary">
          <a className="btn btn-outline-dark btn-social mr-2" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline-dark btn-social mr-2" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-dark btn-social mr-2" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-dark btn-social" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
