import React from "react";
import { products } from "../../product";

const LearnMap2 = () => {
  // database bata awuney data is in form of array of object i.e [{},{},{}]
  
  let task1 = () => {
    const list = products.map((item, i) => {
      return <div>{item.title}</div>;
    });
    return list;
  };

    let task2 = ()=>{
      const list = products.map((item,i)=>{
            return (
                  <div key={i}>
                        {item.title} ,Category is :{item.category} ,Price is :{item.price}
                  </div>
            )
      })

      return list;
    }
     
    
    
  return (
    <div>
      <h1>Products available :</h1>
      {/* {task1()} */}
      {task2()}
    </div>
  );
};

export default LearnMap2;
