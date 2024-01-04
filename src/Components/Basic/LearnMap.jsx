import React from "react";

const LearnMap = () => {
  let planet = ["Sun", "Moon", "Jupiter"];

  let solarSystem = () => {
    let solar = planet.map((value, i) => {
      return (
      <div>Solar system : {value}</div>
      )

    });

    return solar;
  };

  return <div>
      {solarSystem()}
      </div>;
};

export default LearnMap;
