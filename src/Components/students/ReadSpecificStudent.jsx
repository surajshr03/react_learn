import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReadSpecificStudent = () => {

  let params = useParams();

  let [students,setStudent] = useState({});
  let getStudent =async ()=>{

    let result = await axios({
      url:`http://localhost:8001/students/${params.id}`,
      method:`GET`
    })

    setStudent(result.data.result);

  };

  useEffect(()=>{
    getStudent();
  },[])

  return (
    <div>

      <p>Student name is : {students.name}</p>
      <p>Student age is : {students.age}</p>
      <p>Student marriage status is : {students.isMarried}</p>

    </div>
  )
}

export default ReadSpecificStudent