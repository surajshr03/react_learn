import React from 'react'

const LearnTernary = ({marks}) => {
      let age= 23;
      
  return (
    <div>
     {/* { age<18 ? <div>Under age.</div>
      :age>=18 && age <=60 ? <div>Adult.</div>
      :<div>Old.</div> */}

      {
            marks<=39 ? <div>Fail.</div>
            :marks>39 && marks<60 ?<div>3rd division.</div>
            :marks>=60 && marks<80 ? <div>1st divison</div>
            :marks>=80 && marks <=100 ? <div>distinction</div>
            :null
      }
     
    </div>
  )
}

export default LearnTernary;