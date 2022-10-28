import ParticlesBg from "particles-bg";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowDown,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Header = (props) => {
  return (
    <header id="home">
      <ParticlesBg type="cobweb" bg={true} />

      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li className="Btn-nav">
            <a className="smoothscroll Btn-nav" href="#home">
              Introduction
            </a>
          </li>

          <li className="Btn-nav">
            <a className="smoothscroll Btn-nav" href="#aboutme">
              About me
            </a>
          </li>

          <li className="Btn-nav">
            <a className="smoothscroll" href="#skills">
              Skills
            </a>
          </li>

          <li className="Btn-nav">
            <a className="smoothscroll" href="#memories">
              Projects
            </a>
          </li>

          <li className="Btn-nav">
            <a className="smoothscroll" href="#music">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h2 className="typical">
            <Typical loop={1} steps={["Hi there, I'm...", 2000]} />
          </h2>
          <bottom>
            <h1 className="Header-name">
              {props.data ? props.data.name : "Loading"}
            </h1>
          </bottom>
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
          <bottom duration={2000}>
            <ul className="gifts">
              <a
                href={
                  props.data ? props.data.github : "https://github.com/Davsua"
                }
                target="blank"
                className="button btn header-btn"
              >
                <FontAwesomeIcon icon={faGithub} />
                Github
              </a>
              <a
                href="CV_FrontEnd_Developer_David_Suarez.pdf"
                download="Fronted_Developer David Suarez.pdf"
                className="button btn header-btn"
                target="blank"
              >
                <FontAwesomeIcon icon={faContactCard} />
                Resume
              </a>
            </ul>
          </bottom>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#aboutme">
          <FontAwesomeIcon icon={faCircleArrowDown}></FontAwesomeIcon>
        </a>
      </p>
    </header>
  );
};

export default Header;
