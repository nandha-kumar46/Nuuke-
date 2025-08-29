import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT</h1>

      <div className="contact-card">
        <p className="contact-text">
          <span className="highlight">Contact us :</span>{" "}
          <a href="mailto:dev_team@nuuke.info" className="contact-link">
            dev_team@nuuke.info
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
