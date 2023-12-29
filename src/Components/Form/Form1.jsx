import React, { useState } from "react";

const Form1 = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [description, setDescription] = useState("");

  
  let onSubmit = (e) => {
    e.preventDefault();
    let data = {
      name : name ,
      surName : surName,
      email: email ,
      password:password,
      dob:dob,
      description:description
    }
    console.log(data)
  };
  return (
    <div>
      Form
      <form onSubmit={onSubmit}>
        <br />
        {/* name         */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter your name."
            id="name"
            value={name}
            onChange={(e) => {
              // console.log(e.target.value);
              setName(e.target.value);
            }}
          />
        </div>
        {/* surname */}
        <div>
          <br />
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            placeholder="Enter your surname"
            id="surname"
            value={surName}
            onChange={(e) => {
              // console.log(e.target.value);
              setSurName(e.target.value);
            }}
          />
        </div>
        {/* email */}
        <div>
          <br />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            placeholder="Eg : sun03@gmal.com"
            id="email"
            value={email}
            onChange={(e) => {
              // console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
        </div>
        {/* pw */}
        <div>
          <br />
          <label htmlFor="pw">Password:</label>
          <input
            type="text"
            placeholder="Eg : $un123@#"
            id="pw"
            value={password}
            onChange={(e) => {
              // console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
        </div>


        <div>
          <br />
          <label htmlFor="dob">D.O.B:</label>
          <input
            type="date"
            placeholder="Eg : 2002-08-21"
            id="dob"
            value={dob}
            onChange={(e) => {
              // console.log(e.target.value);
              setDob(e.target.value);
            }}
          />
        </div>

        
        <div>
          <br />
          <label htmlFor="des">Description:</label>
          <textarea
            style={{ resize: 'none' }}
            placeholder="Eg : my name is Suraj Shrestha."
            id="des"
            value={description}
            onChange={(e) => {
              // console.log(e.target.value);
              setDescription(e.target.value);
            }}
          />
        </div>

        <br />
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default Form1;
