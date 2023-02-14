import ParticlesBg from "particles-bg";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowDown,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AboutMeHome from "./HomeSection/AboutMeHome";
import ProjectsHome from "./HomeSection/ProjectsHome";
import Buttons from "./Buttons";
import ButtonsResponsive from "./ButtonsResponsive";
//import profile from "../images/imagenelegante.jpg";

export const Header = (props) => {
  //console.log(props.data);

  return (
    <>
      <header id="home">
        <ParticlesBg type="cobweb" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            <h2 className="typical">
              <Typical loop={1} steps={["Hi there, I'm...", 2000]} />
            </h2>
            <span>
              <h1 className="Header-name">
                {props.data ? props.data.name : "Loading"}
              </h1>
            </span>
            <h2 className="typical">
              <Typical
                loop={Infinity}
                steps={[
                  "Full Stack Developer 💻",
                  1500,
                  "React Developer 🌐",
                  1500,
                ]}
              />
            </h2>
            <hr />
            <span duration={2000}>
              <div className="btns-headers">
                <Buttons
                  link="https://github.com/Davsua"
                  text="Github"
                  icon={
                    <FontAwesomeIcon icon={faGithub} className="btn-icon-btn" />
                  }
                />
                <Buttons
                  link="CV_FrontEnd_Developer_David_Suarez.pdf"
                  text="Resume"
                  icon={
                    <FontAwesomeIcon
                      icon={faContactCard}
                      className="btn-icon-btn"
                    />
                  }
                  down="Fronted_Developer David Suarez.pdf"
                />

                <ButtonsResponsive
                  link="https://github.com/Davsua"
                  icon={<FontAwesomeIcon icon={faGithub} />}
                  link2="CV_FrontEnd_Developer_David_Suarez.pdf"
                  icon2={<FontAwesomeIcon icon={faContactCard} />}
                  down2="Fronted_Developer David Suarez.pdf"
                />
              </div>
            </span>
          </div>
        </div>

        <p className="scrolldown" id="aboutme">
          <a className="smoothscroll" href="#aboutme">
            <FontAwesomeIcon icon={faCircleArrowDown}></FontAwesomeIcon>
          </a>
        </p>
      </header>
      <AboutMeHome />
      <ProjectsHome />
    </>
  );
};

export default Header;
