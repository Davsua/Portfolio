import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ButtonsResponsive({
  link = "https://github.com/Davsua",
  icon = <FontAwesomeIcon icon={faGithub} />,
  down = "",
  link2 = "https://github.com/Davsua",
  icon2 = <FontAwesomeIcon icon={faGithub} />,
  down2 = "",
}) {
  return (
    <div className="container-button-responsive">
      <ul className="reponsiveButton">
        <a
          href={link}
          target="blank"
          className="button btn btn-responsive"
          download={down.length > 1 ? down : null}
        >
          {icon}
        </a>
        <a
          href={link2}
          target="blank"
          className="button btn btn-responsive"
          download={down2.length > 1 ? down2 : null}
        >
          {icon2}
        </a>
      </ul>
    </div>
  );
}
