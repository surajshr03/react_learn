import React from "react";

const AddDataToLocalStorage = () => {
  let token = "123";
  localStorage.setItem("token", token);

  //Db ma string ma save hunxa but still hami string mai pathauxam.
  //Application panel -> Storage->Local Storage -> http://3000--------(i.e : URL)
  
  //NOTE : jun browser and url ma save garya tei ma matra save hunxa and tei browser/url bata matra access garna milxa.

  localStorage.setItem("Name", "Suraj");
  localStorage.setItem("Age", "22");
  localStorage.setItem("isMarried", "false");

  return <div>AddDataToLocalStorage</div>;
};

export default AddDataToLocalStorage;
