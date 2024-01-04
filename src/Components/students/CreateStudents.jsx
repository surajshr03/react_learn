import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateStudents = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isMarried, setIsMarried] = useState(false);

  let onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      age: age,
     isMarried: isMarried,
    };
    console.log(data);

    try {
      let result = await axios({
        url:`http://localhost:8001/students`,
        method : "POST",
        data : data ,

      })
      setName("");
      setAge("");
      setIsMarried("");

      // toast(`product successfully created.`)
      toast.success(result.data.message , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    } catch (error) {
      console.log(error);
      toast.error('🦄 Error!! ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }


  };
  return (
    <div>
      <div>
        <br />
        <br />
        <ToastContainer/>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Student Name: </label>
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
          <br />
          <br />
          <label htmlFor="age">Age : </label>
          <input
            type="number"
            placeholder="Eg : 18"
            id="age"
            value={age}
            onChange={(e) => {
              // console.log(e.target.value);
              setAge(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="i">Are you Married ? : </label>
          <input
            type="checkbox"
            
            id="i"
           checked = {isMarried===true}
            onChange={(e) => {
              // console.log(e.target.value);
              setIsMarried(e.target.checked);
            }}
          />
          <br />
          <br />
          <button type="submit">Proceed</button>
        </form>
      </div>
    </div>
  )
}

export default CreateStudents