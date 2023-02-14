import React from "react";
import ConvertidorNum from "../images/ConvertidorNum.png";
import MoviesDb from "../images/MoviesDb.png";
import rickYmorty from "../images/rickYmorty.png";
import WeatherApp from "../images/weatherApp.png";

export const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="project-box">
          <a
            href={props.data ? props.data.Convert : "https://github.com/Davsua"}
            className="Link-project"
            target="blank"
          >
            <img
              className="project-img"
              src={ConvertidorNum}
              alt="project-img"
              target="blank"
            ></img>
            <h4 className="Text-project">Roman numbers convert</h4>
          </a>
        </div>

        <div className="project-box">
          <a
            href={props.data ? props.data.weather : "https://github.com/Davsua"}
            target="blank"
            className="Link-project"
          >
            <img
              className="project-img"
              src={WeatherApp}
              alt="project-img"
              target="blank"
            ></img>
            <h4 className="Text-project">Weather Api</h4>
          </a>
        </div>

        <div className="project-box">
          <a
            href={props.data ? props.data.Rick : "https://github.com/Davsua"}
            target="blank"
            className="Link-project"
          >
            <img
              className="project-img"
              src={rickYmorty}
              alt="project-img"
              target="blank"
            ></img>
            <h4 className="Text-project">Rick & Morty</h4>
          </a>
        </div>

        <div className="project-box">
          <a
            href={props.data ? props.data.Movies : "https://github.com/Davsua"}
            target="blank"
            className="Link-project"
          >
            <img
              className="project-img"
              src={MoviesDb}
              alt="project-img"
              target="blank"
            ></img>
            <h4 className="Text-project">Movies Api</h4>
          </a>
        </div>
      </div>
    </section>
  );
};
