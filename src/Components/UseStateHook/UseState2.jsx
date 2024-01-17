import React, { useState } from 'react'

const UseState2 = () => {

      let[count,setCount]=useState(0)

      let increaseClick=(e)=>{
        
           if(count<=10){
            setCount(count+1)
           }
           
      };
      let resetClick =(e)=>{
        setCount(0)
      };
      let decreaseClick=(e)=>{
        if(count>0){
          setCount(count-1)
        }
      };

  return (
    <div>
      <p>Count is :{count}</p>
      <button onClick={increaseClick}>Increase</button><br/><br/>
      <button onClick={decreaseClick}>Decrease</button><br/><br/>
      <button onClick={resetClick}>Reset</button><br/><br/>


    </div>
  )
}

export default UseState2