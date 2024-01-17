import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ReadAllProducts = () => {
  // let [products, setProduct] = useState([
  //   { name: "P1", price: 111, quantity: 222 },
  //   { name: "P2", price: 111, quantity: 222 },
  //   { name: "P2", price: 111, quantity: 222 },
  // ]);

  let [products, setProduct] = useState([]);

  let navigate = useNavigate();

  let getAllProduct = async(e)=>{

    let result = await axios({
      url:`http://localhost:8001/products`,
      method:`GET`,
    })
    // console.log(result.data.result)
    setProduct(result.data.result)

  };

  
  
  let deleteProduct=async(id)=>{
    try {
      
    let result = await axios({
      url:`http://localhost:8001/products/${id}`,
      method:`DELETE`,
    })
    getAllProduct();
      
    } catch (error) {
      console.log('error')
    }

  }
  useEffect(()=>{ 
    getAllProduct();

  },[])



  return (
    <div>

      {
        products.map((item,i)=>{
          return(
            <div key={i}>

            <p style={{border:"solid black 2px", marginTop:"3px"}} key={i}>
              product name :{item.name}<br/>
              product price is Nrs : {item.price}<br/>
              product quantity : {item.quantity}<br/>

              <button style={{marginRight:"30px"}} onClick={()=>{
                navigate(`/products/${item._id}`);
              }}>View</button>
              
              <button style={{marginRight:"30px"}}
              onClick={(e)=>{
                navigate(`/products/update/${item._id}`);

              }}>Edit</button>

              <button style={{marginRight:"30px"}}

              onClick={()=>{
                deleteProduct(item._id)
              }}>Delete</button>
            </p>
            </div>
          )
        })

      }

    </div>
  )
}

export default ReadAllProducts