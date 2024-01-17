import React, { useContext } from "react";
import { Context1, Context2 } from "../../App";

const GrandChild = () => {

      let value = useContext(Context1);
      let value1 = useContext(Context2);

  return <div>
      {/* GrandChild Name is : {props.name} */}
      <br/> GrandChild<br/><br/>
      name is {value.name}<br/>
      age is {value.age}<br/>
      Address is {value1.address}
      <br/><br/>
      <button onClick={()=>{
            value.setName("Moon")
            value1.setAddress("Solar System")
      }}>Change</button><br/><br/>
      <button onClick={()=>{
            value.setName("Sun")
            value1.setAddress("Solar")
      }}>Change Back</button>
  </div>;
};

export default GrandChild;

//parent->child-> grand child (prop drilling:passing variable from parent component to child ->grandchild.... component)
//prop drilling : is basically an issue so to overcome this we'll use useContext or redux.
