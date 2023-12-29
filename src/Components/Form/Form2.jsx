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
      <div>
          <br />
          <label htmlFor="iM">Description:</label>
          <input
            type="checkbox"
            placeholder="Eg : my name is Suraj Shrestha."
            id="iM"
            checked={isMarried===true}
            onChange={(e) => {
              // console.log(e.target.value);
              setIsMarried(e.target.checked);
            }}
          />
        </div>
      <form 
      onSubmit={onSubmit}>
            <button type="submit">Proceed</button>

      </form>
       
</div>
  )
};

export default Form2;



