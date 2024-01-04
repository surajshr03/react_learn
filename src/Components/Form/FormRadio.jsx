import React, { useState } from "react";

const FormRadio = () => {


  let [gender, setGender] = useState("male");

  let onSubmit = (e) => {
    e.preventDefault();
    let data = {
     
      gender:gender
    };
    console.log(data);
  };


  return (
    <div>
     <div>
          <label>Gender</label>
          <br></br>

          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>

          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>

          <label htmlFor="other">Other</label>
          <input
            type="radio"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>
        </div>

    </div>
  );
};

export default FormRadio;
