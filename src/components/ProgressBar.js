import React from "react";

const ProgressBar = (props) => {
  const { color, percentage } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 30,
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 7,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
