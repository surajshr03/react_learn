import React, { useState } from 'react'

const UseStateHook1 = () => {

   //let name = 'sun';

   let[name,setName]=useState("Sun")
   let[age,setAge]=useState(22)

   let handleClick=(e)=>{
      //name='moon'  : yesari haina
      setName("Moon");}
   let origianlClick =(e)=>{
     setName("Sun");}

     let handleAge=(e)=>{
      setAge(24)
     }
     let originalAge=(e)=>{
      setAge(22)
     }

  return (
    <div>
      <p>Name is : {name}</p>
      <button onClick={handleClick}>Change Name</button><br/><br/>
      <button onClick={origianlClick}>Name Go Back </button><br/><br/>
      <p>Name is : {name}</p>
      <button onClick={handleAge}>Change Age</button><br/><br/>
      <button onClick={originalAge}>Age Go Back</button>
    </div>
  )
}

export default UseStateHook1