import React, { useState } from 'react'

const Increment = () => {
      const[count,setCount]=useState(0);
      const[count2,setCount2]=useState(100);

  

      console.log("****")

      let handleClick=(e)=>{
            setCount(count +1)
      }
      let handleClick2=(e)=>{
            setCount(count +100)
      }
  return (
    <div>
      {count}
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleClick2}>Increase2</button>
    </div>
  )
}

export default Increment