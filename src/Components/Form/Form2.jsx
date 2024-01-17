import React, { useState } from "react";

const Form2 = () => {
 
  const[isMarried,setIsMarried]=useState(false)
  let onSubmit = (e) => {
    e.preventDefault();
    let data = {
      isMarried:isMarried
    }
    console.log(data)
  };
  return (
    <div>
      Form
      <form 


      onSubmit={onSubmit}>
      <div>
          <br />
          <label htmlFor="iM">Is Married? :</label>
          <input
            type="checkbox"
            // placeholder=""
            id="iM"
            checked={isMarried===true}
            onChange={(e) => {
              // console.log(e.target.value);
              setIsMarried(e.target.checked);
            }}
          />
        </div>
            <button type="submit">Proceed</button>

      </form>
       
</div>
  )
};

export default Form2;



