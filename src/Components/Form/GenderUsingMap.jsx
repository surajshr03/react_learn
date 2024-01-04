import React, { useState } from "react";

const GenderUsingMap = () => {
  const [gender, setGender] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();

    let data = {
      gender: gender,
    };

    console.log(gender);
  };
  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  let list1 = genders.map((item, i) => {
    return (
      <option key={i} value={item.value}>
        {item.label}
      </option>
    );
  });
  return (
    <div>
      GenderUsingMap:
      <br />
      <form onSubmit={onSubmit}>
        <label htmlFor="gender">Select Gender :</label>
        <select 
        id="gender"
        value={gender}
        onChange={(e)=>{
            setGender(e.target.value)
        }}>
         
         {
            genders.map((item, i) => {
                  return (
                    <option key={i} value={item.value}>
                      {item.label}
                    </option>
                  );
                })
         }
       
          
        </select>

        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default GenderUsingMap;
