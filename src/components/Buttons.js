import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Buttons({
  link = "https://github.com/Davsua",
  icon = <FontAwesomeIcon icon={faGithub} className="btn-icon-btn" />,
  text = "Github",
  down = "",
  classE = "",
}) {
  return (
    <div
      className={
        classE.length > 1
          ? `container-button-desktop ${classE}`
          : "container-button-desktop"
      }
    >
      <ul className="gifts desktopButton">
        <button className="header-btn">
          <a
            href={link}
            target="blank"
            className="button btn "
            download={down.length > 1 ? down : null}
          >
            {icon}
            {text}
          </a>
        </button>
      </ul>
    </div>
  );
}
