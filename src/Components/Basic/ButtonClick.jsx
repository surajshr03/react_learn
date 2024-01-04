import React from 'react'

const ButtonClick = () => {

      let handleClick = (e)=>{
            console.log('Button Clicked.')
      }
  return (
    <div style={{textAlign:'center'}}>
      {/* <button onClick={(e)=>{
            console.log('Button is clicked.')
      }}>Click me</button> */}

      <button onClick={handleClick}>Click me</button>


    </div>
  )
}
export default ButtonClick;