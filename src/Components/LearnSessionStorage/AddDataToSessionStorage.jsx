import React from 'react'

const AddDataToSessionStorage = () => {
let token="12345"
      sessionStorage.setItem("token","token");
      sessionStorage.setItem("name","sun");
      sessionStorage.setItem("age","22");
      sessionStorage.setItem("isMarried","false");

        return (
    <div>AddDataToSessionStorage<br/></div>
  )
}

export default AddDataToSessionStorage


//Application panel --> Session Storage -> Url.

//Session storage is the browsers memory of particular URl in particular session only.
//data lost when session ends.
