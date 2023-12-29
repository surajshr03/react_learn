import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const ReadSpecificProduct = () => {
//params bata pass garna
  let params = useParams();
  // console.log(params);


  //query bata pass garna
  let [query]= useSearchParams();
  console.log(query.get("name"))
  console.log(query.get("isMarried"))


  let navigate= useNavigate();
  
  return (
    <div>ReadSpecificProduct:

      <button
      onClick={()=>{
        navigate("/products/update/1234123")
      }}>
        Edit
      </button>
       

    </div>
  )
}

export default ReadSpecificProduct