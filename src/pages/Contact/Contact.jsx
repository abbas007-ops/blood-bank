import React from "react";
import BannerImage from "../../components/bannerImage/BannerImage";

const Contact = () => {
  return (
    <React.Fragment>
      <BannerImage />
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <div className="bg-primary text-dark text-center p-4">
              <h4 className="m-0">
                <i className="fa fa-map-marker-alt text-white mr-2"></i>College road nashik maharashtra
              </h4>
            </div>
            {/* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=nashik%20maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google map link for website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div> */}
            <iframe
              style={{ width: "100%", height: "470px", border: "0" }}
              src="https://maps.google.com/maps?q=nashik%20maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="col-lg-7">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Contact Us
            </h6>
            <h1 className="mb-4">Contact For Any Queries</h1>
            <div
              className="contact-form bg-secondary"
              style={{ padding: "30px" }}
            >
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control border-0 p-4"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control border-0 py-3 px-4"
                    rows="3"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-primary py-3 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Contact;
