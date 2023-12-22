import React, { useState } from "react";

const UseStateImg = () => {
      //show and hide img
  let [image, setImage] = useState(true);

  let showImage = (e) => {
      setImage(true)
  };
  let hideImage = (e) => {setImage(false)};
  return (
    <div>
      <button onClick={showImage}>show image</button>
      <br />
      <button onClick={hideImage}>hide image</button>
      <br />
      {     image?//if true
            <img src='./logo192.png' alt='logo'></img>
            :null//else
      }<br/>
    </div>
  );
};

export default UseStateImg;
