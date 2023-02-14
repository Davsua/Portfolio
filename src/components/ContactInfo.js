import React from "react";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactInfo = ({
  icon = <FontAwesomeIcon icon={faPhoneAlt} />,
  text = "Info",
}) => {
  return (
    <>
      <div className="containerLeft-info">
        <div className="icon">{icon}</div>
        <p className="contact-Text">{text}</p>
      </div>
    </>
  );
};

export default ContactInfo;
