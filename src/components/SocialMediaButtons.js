import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";

export const SocialMediaButtons = (props) => {
  return (
    <div className="socialMedia-container">
      <a
        href={props.data ? props.data.github : "https://github.com/Davsua"}
        className="socialMedia-btn github-btn"
        target="blank"
      >
        <FontAwesomeIcon icon={faGithub} className="icon-btn" />
      </a>
      <a
        href={
          props.data
            ? props.data.linkedin
            : "https://www.linkedin.com/in/david-suarez-carvajal-b3745121a/"
        }
        className="socialMedia-btn linkedin-btn"
        target="blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className="icon-btn" />
      </a>
      <a
        href="CV_FrontEnd_Developer_David_Suarez.pdf"
        download="Fronted_Developer David Suarez.pdf"
        className="socialMedia-btn contact-btn"
        target="blank"
      >
        <FontAwesomeIcon icon={faContactCard} className="icon-btn" />
      </a>
    </div>
  );
};
