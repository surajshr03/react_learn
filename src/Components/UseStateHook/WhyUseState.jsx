import React, { useState } from 'react'

const WhyUseState = () => {
      // let name = "sun"
      let [name, setName]=useState("moon");


      console.log("*********")
  return (
    <div>
      {/* {name}
      <button onClick={()=>{
            name="Moon";
      }}>change name</button> */}
      {/* yesari name change hudaina. */}
      {name}
      <button onClick={()=>{
            {setName("SUN")}
            
      }}>Change Name</button>

    </div>
  )
}

export default WhyUseState