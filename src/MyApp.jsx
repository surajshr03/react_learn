import React, { createContext, useState } from "react";
import ReactRouter from "./Components/ReactRouter";

export let GlobalVariableContext = createContext();

const MyApp = () => {
  //let token = localStorage.getItem("token")
  let [token,setToken]=useState(localStorage.getItem("token"));

  return (
    <div>
      <GlobalVariableContext.Provider value={{token:token,setToken:setToken}}>
        <ReactRouter></ReactRouter>
      </GlobalVariableContext.Provider>
    </div>
  );
};

export default MyApp;

