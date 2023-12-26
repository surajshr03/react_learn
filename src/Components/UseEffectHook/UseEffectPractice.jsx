import React, { useEffect, useState } from "react";

const UseEffectPractice = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  //multiple dependency
  useEffect(() => {
    console.log("Use effect called -------- when count is increased by 1 or 100");
  }, [count, count2]);
  //it execute for 1st render
  // from 2nd render the function(useEffect ) will execute if variable count or count2 is changed.

  //[] yo vitra ko dependency change vayo vaney chai useEffect execute hunxa

  //single dependency
  useEffect(() => {
        console.log("2nd useEffect ---- when count is increased by 1");
      }, [count]);
      //it executes for first render and from next if count is changed then it will render

  //empty dependency
  useEffect(() => {
        console.log("3rd useEffect --------initial render");
      }, []);
      //it executes for first render only

  //no dependency : yesari nagarney
  useEffect(() => {
    console.log("4th useEffect  initial / everytime render");
  }); // it execute for each render

  console.log("******************");

  return (
    <div>
      count is {count}
      <br />
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      count is {count2}
      <br />
      <button
        onClick={(e) => {
          setCount2(count2 + 30);
        }}
      >
        Increment 2
      </button>
    </div>
  );
};

export default UseEffectPractice;
