import React from "react";
import { products } from "../../product";

const LearnFilter = () => {
  //       let task1=()=>{
  //             let list = products.filter((item,i)=>{
  //                   if(item.price>2000){return true}
  // //by default else part false hunxa
  //             }).map((item,i)=>{
  //                   return (<div key={i}> {item.title} ,Category is :{item.category} ,Price is :{item.price}</div>)

  //             })

  //             return list;
  //       }

  //category==="Books"
  let task2 = () => {
    let list = products
      .filter((item, i) => {
        if (item.category === "Books") {
          return true;
        }
        return false;
      })
      .map((item, i) => {
        return (
          <div key={i}>
            {item.title} ,Cost is: {item.price} , Category :{item.category}
          </div>
        );
      });

    return list;
  };

  let task3 = ()=>{
      let sum=products.reduce((sum, item) => sum + item.price, 0);
      return sum
  }

  let task4 =()=>{
      let list = products.map((item,i)=>{
            return(
                  <div key={i}>
                    {item.title} costs NRs: {item.price} 
                        
                  </div>
            )
      })


      return list;

  }
  return (
    <div>
      <h1 className="success">Products:</h1>
      {/* {task1()} */}
      <p>B o o k : {task2()}</p><br/>
      <p>The total sum is: Rs{task3()}</p><br/>
      <p>Cost:<br/>{task4()}</p><br/>
      <p>Cost:<br/>{task4()}</p><br/>
      
      {}


    </div>
  );
};

export default LearnFilter;
