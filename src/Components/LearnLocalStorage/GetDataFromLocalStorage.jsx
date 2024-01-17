import React from 'react'

const GetDataFromLocalStorage = () => {

      console.log(localStorage.getItem("Name"))
      console.log(localStorage.getItem("Age"))
      console.log(localStorage.getItem("isMarried"))
      console.log(localStorage.getItem("token"))

      let name = localStorage.getItem("Name");
  return (
    <div>
       {name} is my name .
      
    </div>
  )
}

export default GetDataFromLocalStorage