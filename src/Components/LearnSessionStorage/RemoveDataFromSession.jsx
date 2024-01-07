import React from "react";

const RemoveDataFromSession = () => {
  return (
    <div>
      <br />
      RemoveDataFromSession
      <br />
      <button
        onClick={(e) => {
          sessionStorage.removeItem("token");
        }}
      >
        Remove Token
      </button>
      <br />
      <button
        onClick={(e) => {
          sessionStorage.removeItem("name");
        }}
      >
        Remove Name
      </button>
      <br />
      <button
        onClick={(e) => {
          sessionStorage.removeItem("age");
          sessionStorage.removeItem("isMarried");
        }}
      >
        Remove Age and IsMarried
      </button>
      <br />
      <br />
      <p>
        {" "}
        Set all values in local storage again{" "}
        <button
          onClick={(e) => {
            // sessionStorage.setItem("token", token);
            sessionStorage.setItem("name", "Suraj");
            sessionStorage.setItem("age", "22");
            sessionStorage.setItem("isMarried", "false");
          }}
        >
          Click Me
        </button>
      </p>
    </div>
  );
};

export default RemoveDataFromSession;
