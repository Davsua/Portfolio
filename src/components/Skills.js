import html from "../images/html.png";
import css3 from "../images/css3.png";
import React from "../images/React.png";
import JS from "../images/JS.png";
import node from "../images/node.png";
import ProgressBar from "./ProgressBar";

export const Skills = (props) => {
  const arrData = [
    { color: "#dd542b", percentage: "50" },
    { color: "#2633d3", percentage: "50" },
    { color: "#e4f125", percentage: "60" },
    { color: "#06c3ba", percentage: "55" },
    { color: "#4eb31b", percentage: "40" },
  ];

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
              <ProgressBar
                color={arrData[0].color}
                percentage={arrData[0].percentage}
              />
            </div>
          </div>
          <div className="skill-container">
            <div>
              <img src={css3} alt="html" className="skill-img"></img>
            </div>
            <div className="skill-text">
              <ProgressBar
                color={arrData[1].color}
                percentage={arrData[1].percentage}
              />
            </div>
          </div>
          <div className="skill-container">
            <div>
              <img src={JS} alt="html" className="skill-img"></img>
            </div>
            <div className="skill-text">
              <ProgressBar
                color={arrData[2].color}
                percentage={arrData[2].percentage}
              />
            </div>
          </div>
          <div className="skill-container">
            <div>
              <img src={React} alt="html" className="skill-img"></img>
            </div>
            <div className="skill-text">
              <ProgressBar
                color={arrData[3].color}
                percentage={arrData[3].percentage}
              />
            </div>
          </div>
          <div className="skill-container">
            <div>
              <img src={node} alt="html" className="skill-img"></img>
            </div>
            <div className="skill-text">
              <ProgressBar
                color={arrData[4].color}
                percentage={arrData[4].percentage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
