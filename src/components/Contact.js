import React from "react";
import ContactInfo from "./ContactInfo";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="ContainerContact">
        <div className="contact-header">
          <h4>Get in touch</h4>
          <h1>CONTACT</h1>
        </div>
        <div className="WrapContact">
          <div className="left-section">
            <ContactInfo
              icon={<FontAwesomeIcon icon={faPhoneAlt} />}
              text="+573192305297"
            />
            <ContactInfo
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              text="Davidsuarezcarvajal98@gmail.com"
            />
            <ContactInfo
              icon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
              text="Medellin, Colombia"
            />
          </div>
          <div className="right-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
