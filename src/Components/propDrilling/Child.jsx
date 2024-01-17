import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return <div><br/>Child<br/>
      {/* <GrandChild name={props.name}></GrandChild> */}
      <GrandChild ></GrandChild>
  </div>;
};

export default Child;
