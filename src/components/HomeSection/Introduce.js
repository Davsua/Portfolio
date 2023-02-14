import { faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import JsonData from "../../data.json";
import Buttons from "../Buttons";
import ButtonsResponsive from "../ButtonsResponsive";

export default function Introduce({ introducing = "David S" }) {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    //console.log(landingPageData);
  }, [landingPageData]);

  return (
    <div className="container-introduce">
      <div className="introduce-text">
        <h4 className="introducing-text">{introducing}</h4>
      </div>

      <div className="butoonABTme">
        <Buttons
          link="/aboutme"
          text="see more"
          classE="btn-abtme"
          icon={<FontAwesomeIcon icon={faUser} className="btn-icon-btn" />}
        />
        <Buttons
          link="/projects"
          text="projects"
          icon={
            <FontAwesomeIcon
              icon={faNewspaper}
              className="btn-icon-btn btn-abtme"
            />
          }
        />

        <div>
          <ButtonsResponsive
            link="/aboutme"
            icon={<FontAwesomeIcon icon={faUser} />}
            link2="/projects"
            icon2={<FontAwesomeIcon icon={faNewspaper} />}
          />
        </div>
      </div>
    </div>
  );
}
