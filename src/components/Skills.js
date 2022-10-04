import html from "../images/html.png";
import css3 from "../images/css3.png";
import React from "../images/React.png";
import JS from "../images/JS.png";
import node from "../images/node.png";

export const Skills = (props) => {
  return (
    <>
      <section id="skills">
        <h1 className="title-skill">My Skills</h1>
        <div className="skills">
          <div className="skill-container">
            <div>
              <img src={html} alt="html" className="skill-img"></img>
            </div>
            <div className="skill-text">
              lorem
              ipsumjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </div>
          </div>
          <div className="skill-container">
            <div>
              <img src={css3} alt="html" className="skill-img"></img>
            </div>
            <div className="skill-text">
              lorem
              ipsumjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </div>
          </div>
          <div className="skill-container">
            <div>
              <img src={JS} alt="html" className="skill-img"></img>
            </div>
            <div className="skill-text">
              lorem
              ipsumjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </div>
          </div>
          <div className="skill-container">
            <div>
              <img src={React} alt="html" className="skill-img"></img>
            </div>
            <div className="skill-text"></div>
          </div>
          <div className="skill-container">
            <div>
              <img src={node} alt="html" className="skill-img"></img>
            </div>
            <div className="skill-text"></div>
          </div>
        </div>
      </section>
    </>
  );
};
