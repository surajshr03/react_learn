import React, { useState } from 'react'

const Toggle = () => {

      const[showImg,setShowImg]=useState(true);

      let handleImage =()=>{
            if(showImg){
                  setShowImg(false);
            }else{
                  setShowImg(true)
            }

      }
  return (
    <div>
            <button onClick={handleImage}>Show</button><br/>
            {showImg===true?"Hide":"Show"}
{/* //img show xa vaney hide garney and vice-versa */}
            {showImg===true?<img src="./gr.jpg"  ></img>:null}

    </div>
  )
}

export default Toggle