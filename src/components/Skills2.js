import html from "../images/html.png";
import css3 from "../images/css3.png";
import React from "../images/React.png";
import JS from "../images/JS.png";
import node from "../images/node.png";
import ProgressBar2 from "./ProgressBar2";

export const Skills2 = (props) => {
  const arrData = [
    { image: html, color: "#dd542b", percentage: "50" },
    { image: css3, color: "#2633d3", percentage: "50" },
    { image: React, color: "#e4f125", percentage: "50" },
    { image: JS, color: "#06c3ba", percentage: "55" },
    { image: node, color: "#4eb31b", percentage: "40" },
  ];

  return (
    <>
      <section id="skills">
        <h1 className="title-skill">My Skills</h1>
        <div className="skills">
          <div className="skill-container2">
            {arrData.map((item, idx) => (
              <ProgressBar2
                key={idx}
                image={item.image}
                color={item.color}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
