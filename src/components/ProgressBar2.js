import React from "react";

const ProgressBar2 = (props) => {
  const { image, color, percentage } = props;

  /*const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };*/

  const fillerStyles = {
    height: "100%",
    width: `100%`,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right"
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="Container-progress">
      <img src={image} alt="skill" className="skill-img2"></img>
      <div style={fillerStyles} className="content-progress">
        <span style={labelStyles}>{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar2;
