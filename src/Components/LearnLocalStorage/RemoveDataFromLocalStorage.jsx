import React from 'react'

const RemoveDataFromLocalStorage = () => {

      let token = "111111111112333333";
  return (
    <div>

      <button onClick={(e)=>{
            localStorage.removeItem("token")
      }}>Remove Token</button><br/>
      <button onClick={(e)=>{
            localStorage.removeItem("Name")
      }}>Remove Name</button><br/>
      <button onClick={(e)=>{
            localStorage.removeItem("Age")
            localStorage.removeItem("isMarried")
      }}>Remove Age and IsMarried</button>

      <br/>
      <br/>
      <p>  Set all values in local storage again  <button onClick={(e)=>{

            localStorage.setItem("token", token);
            localStorage.setItem("Name", "Suraj");
            localStorage.setItem("Age", "22");
            localStorage.setItem("isMarried", "false");

      }}>Click Me</button></p>
     
      

    </div>
  )
}

export default RemoveDataFromLocalStorage

//localStorage is the browser's memory for a particular URl.
//Data in Local Storage persist even when session ends.