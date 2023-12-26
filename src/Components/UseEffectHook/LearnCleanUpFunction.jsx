import React, { useEffect, useState } from 'react'

const LearnCleanUpFunction = () => {
      const [count,setCount]=useState(0);

      const [count2,setCount2]=useState(100);

      useEffect(()=>{
            console.log("Use effect called.")
             //cleanUp function
            return ()=>{
                  console.log("i am clean up function.")
            };
      },[count])
      //cleanup function are those function returned by useEffect function
      // cleanup function doesn't run in first render.
      // from only 2nd render will the cleanup function get executed(Note : dependency variable must change too)
      //Normally top to down execution but here (not in first render but after 2nd render), initially cleanup function gets executed and then from upwards like it usually does.
      //when component is unmount , nothing gets executed except cleanup function


  return (
    <div>
       count is {count}
      <br/>
      <button onClick={(e)=>{
            setCount (count+1)
      }}>Increment</button><br/>
     
      <br/>

      

    </div>
  )
}

export default LearnCleanUpFunction