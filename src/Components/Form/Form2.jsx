import React, { useState } from "react";

const Form2 = () => {
 
  
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
          <label htmlFor="des">Description:</label>
          <input
            type="checkbox"
            placeholder="Eg : my name is Suraj Shrestha."
            id="des"
            checked={isMarried===true}
            onChange={(e) => {
              // console.log(e.target.value);
              setDescription(e.target.checked);
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



