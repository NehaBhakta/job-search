import React from "react";
import Map from "./Map";
import Form from "./Form";
const ContactInfo = () => {
  return (
    <>
      <div className="col-lg-5 d-flex align-items-stretch">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>B608 Adam Street, New York, NY 535022</p>
          </div>

          <div className="email">
            <i className="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>info@example.com</p>
          </div>

          <div className="phone">
            <i className="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>+1 4568 449499 55s</p>
          </div>

          <Map />
        </div>
      </div>
      <Form />
    </>
  );
};

export default ContactInfo;
