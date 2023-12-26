import { useState } from "react";
import "./App.css";
import LearnCleanUpFunction from "./Components/UseEffectHook/LearnCleanUpFunction.jsx";
import UseEffectPractice from "./Components/UseEffectHook/UseEffectPractice.jsx";
import UseEffectPractise from "./Components/UseEffectHook/UseEffectPractice.jsx";
//alt + shift + o : garera unused hatako xu paxi chaiye ma feri import garney
import HandleImage from "./Components/UseStateHook/HandleImage.jsx";
import Increment from "./Components/UseStateHook/Increment.jsx";
import Toggle from "./Components/UseStateHook/Toggle.jsx";
import WhyUseState from "./Components/UseStateHook/WhyUseState.jsx";

function App() {
  // let name = `Suraj`;
  // let age = `22`;
  // console.log(name)

  const[show,setShow]=useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <div style={{textAlign:'center'}}>
      <p style={{color:"red",backgroundColor:"black"}}>My name is {name} and my age is {age}.</p>

      <a href="https://www.facebook.com/" target =" ">facebook</a>

      <p><img src="./gr.jpg"></img> </p>

    </div> */}

      {/* <Age></Age> */}
      {/* <Detail name="Suraj" address="Pharping" age ={22}></Detail> */}
      {/* <Details1 name="Suraj" address="Pharping" age ={22}></Details1> */}
      {/* <LearnTernary marks={56}></LearnTernary> */}
      {/* <EffectOnDifferentData></EffectOnDifferentData> */}
      {/* <Location  country="Nepal" province="03" district="Kathmandu" exactLocation="Pharping"></Location> */}
      {/* <LearnMap></LearnMap> */}
      {/* <LearnMap2></LearnMap2> */}
      {/* <LearnFilter></LearnFilter> */}

      {/* <ButtonClick></ButtonClick> */}

      {/* <UseStateHook1></UseStateHook1> */}
      {/* <UseState2></UseState2> */}


{/* <UseStateImg/> */}
{/* <HandleImage/> */}

{/* <Toggle/> */}
{/* <WhyUseState/> */}
{/* <Increment/>   */}

{/* <UseEffectPractice/> */}

<LearnCleanUpFunction/>
     


    </div>
  );
}

export default App;

/* 

*/
