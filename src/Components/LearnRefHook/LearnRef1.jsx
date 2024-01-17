import React, { useRef } from 'react'

const LearnRef1 = () => {
      let ref1 = useRef();
      let ref2 = useRef();
      let refInput1 = useRef();
      let refInput2 = useRef();


  return (
    <div>

      <button onClick={(e)=>{
            ref1.current.style.background="yellow"
      }}>Change bg color of Sun</button>
      <button onClick={(e)=>{
             ref2.current.style.background="orange"
      }}>Change bg color of moon.</button>

      <div onClick={(e)=>{
           refInput1.current.focus();
      }}>Focus input 1</div>
      <div onClick={(e)=>{
           refInput2.current.blur();
      }}>Blur input 2</div>

      <div ref={ref1}>Me is Sun</div>
      <div ref={ref2}>Me is Moon</div>

      <input ref={refInput1} placeholder='input1'></input>
      <input ref={refInput2} placeholder='input2'></input>



    </div>
  )
}

export default LearnRef1