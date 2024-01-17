import React, { useState } from "react";

const Gender = () => {
  const [gender, setGender] = useState("male");

  let onSubmit = (e) => {
      e.preventDefault();

      let data = {
            gender : gender
      }
console.log(gender)
  };
  return (
    <div>
      <br />
      Gender :
      <form onSubmit={onSubmit}>
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

        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default Gender;
