import React, { useContext } from "react";
import Child from "./Child";
import { Context1 } from "../../App";

const Parent = () => {

      let value = useContext(Context1)

  return <div><br/>Parent<br/>
      {/* <Child name={props.name}></Child> */}
      <Child >
            name : {value.name}
      </Child>
  </div>;
};

export default Parent;
