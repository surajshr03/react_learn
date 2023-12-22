import React, { useState } from "react";

const HandleImage = () => {
      //show and hide img
  let [image, setImage] = useState(true);

  let handleImage = (isVisible) => {
      return (e)=>{
            setImage(isVisible)
      }
  };
 
  return (
    <div>
      <button onClick={handleImage(true)}>show image</button>
      <br />
      <button onClick={handleImage(false)}>hide image</button>
      <br />
      {     image?//if true
            <img src='./logo192.png' alt='logo'></img>
            :null//else
      }<br/>
    </div>
  );
};

export default HandleImage;



//onClick ma:
//-handleImg           =    (e)=>{}   : if u don't have to pass value
//-handleImg()        =     ()=>{return ((e)=>{})}        : if u have to pass value
