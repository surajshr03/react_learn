import { useState } from "react";
import "./App.css";

import ReactRouter from "./Components/ReactRouter.jsx";
import Form3 from "./Components/Form/Form3.jsx";
import FormRadio from "./Components/Form/FormRadio.jsx";
import Form2 from "./Components/Form/Form2.jsx";
import Gender from "./Components/Form/Gender.jsx";
import GenderUsingMap from "./Components/Form/GenderUsingMap.jsx";
import Days from "./Components/Form/Days.jsx";
import LearnRef1 from "./Components/LearnRefHook/LearnRef1.jsx";
import AddDataToLocalStorage from "./Components/LearnLocalStorage/AddDataToLocalStorage.jsx";
import GetDataFromLocalStorage from "./Components/LearnLocalStorage/GetDataFromLocalStorage.jsx";
import RemoveDataFromLocalStorage from "./Components/LearnLocalStorage/RemoveDataFromLocalStorage.jsx";
import AddDataToSessionStorage from "./Components/LearnSessionStorage/AddDataToSessionStorage.jsx";
import GetDataToSessionStorage from "./Components/LearnSessionStorage/GetDataToSessionStorage.jsx";
import RemoveDataFromSession from "./Components/LearnSessionStorage/RemoveDataFromSession.jsx";

function App() {
  // let name = `Suraj`;
  // let age = `22`;
  // console.log(name)

  const [show, setShow] = useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <div style={{textAlign:'center'}}>
      <p style={{color:"red",backgroundColor:"black"}}>My name is {name} and my age is {age}.</p>

      <a href="https://www.facebook.com/" target =" ">facebook</a>

      <p><img src="./gr.jpg"></img> </p>

    </div> */}

      <>
        {/* <Age></Age> */}
        {/* <Detail name="Suraj" address="Pharping" age ={22}></Detail> */}
        {/* <Details1 name="Suraj" address="Pharping" age ={22}></Details1> */}
        {/* <LearnTernary marks={56}></LearnTernary> */}
        {/* <EffectOnDifferentData></EffectOnDifferentData> */}
        {/* <Location  country="Nepal" province="03" district="Kathmandu" exactLocation="Pharping"></Location> */}
      </>
      <>
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
        {/* {show ? <LearnCleanUpFunction/> : null}
         <button onClick={()=>{setShow(true)}} >show</button>
        <button onClick={()=>{setShow(false)}} >hide</button> */}
      </>
      {/* ------------------------- */}
      {/* <MyLinks/>   
       <MyRoutes/> */}

      {/* <NestedRoutesProduct /> */}

      {/* <ReactRouter></ReactRouter> */}
      {/* ------------------- */}

      {/* <Form1 /> */}
      {/* <Form2 /> */}
      {/* <Form3/> */}
       {/* <FormRadio/> */}

       {/* <Gender/> */}
       {/* <GenderUsingMap/> */}
       {/* <Days/> */}
{/* --------------------------------------------- */}

{/* <LearnRef1/> */}
{/* ------------------- */}
{/* local Storage */}

{/* <AddDataToLocalStorage/> */}
{/* <GetDataFromLocalStorage/> */}
{/* <RemoveDataFromLocalStorage/> */}

{/* Session Storage */}

<AddDataToSessionStorage/>
<GetDataToSessionStorage/>
<RemoveDataFromSession/>

{/* ------------------- */}



      <b>
        <p style={{ marginTop: "300px", color: "green " }}>
          ____APP COMPONENT____
        </p>
      </b>
    </div>
  );
}

export default App;

/* 

*/
