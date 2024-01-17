import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ReadAllStudents = () => {

  let [students, setStudent]= useState([]);

  let navigate = useNavigate();
  
  let getAllStudent = async(e)=>{

    let result = await axios({
      url:`http://localhost:8001/students`,
      method:`GET`,
    })
    // console.log(result.data.result)
    setStudent(result.data.result)

  };

  useEffect(()=>{ 
    getAllStudent();
  },[])


  return (
    <div>
      {
        students.map((item,i)=>{
          return(
            <div key={i}>
              <p style={{border:"solid black 2px", marginTop:"3px"}} key={i}>
                Student name : {item.name}<br/>
                Student age : {item.age}<br/>
                Student martial status : {String(item.isMarried)}
                <br/>
                <br/>
                <button style={{marginRight:"30px"}} onClick={()=>{
                navigate(`/students/${item._id}`);
              }}>View</button>

              <button style={{marginRight:"30px"}}
              onClick={(e)=>{
                navigate(`/students/update/${item._id}`);

              }}
              >Edit</button>

              <button style={{marginRight:"30px"}}
              onClick={async()=>{

                try {
                  const result =await axios({
                    url:`http://localhost:8001/students/${item._id}`,
                    method:"DELETE"
                  })
                  getAllStudent();
                  
                } catch (error) {
                  console.log('error')
                  
                }
              }}>Delete</button>



              </p>
            </div>

            
          )
        })
      }

    </div>
  )
}

export default ReadAllStudents

// <button onClick={async()=>{
//                  const res = await axios({
//                   url: `http://localhost:8000/products/${product._id}`,
//                   method: "DELETE"
//                 })
//                 getAllProducts();
//               }}>Delete</button>