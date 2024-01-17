import React from "react";

const GetDataToSessionStorage = () => {
  console.log(sessionStorage.getItem("name"));
  console.log(sessionStorage.getItem("token"));
  let token = sessionStorage.getItem("token");
  return (
    <div>
      {sessionStorage.getItem("name")}
      <br />
      {token}
    </div>
  );
};

export default GetDataToSessionStorage;
