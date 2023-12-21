import React from 'react'

const LearnMap2 = () => {
// database bata awuney data is in form of array of object i.e [{},{},{}]
      const products = [
            {
              id: 1,
              title: "MacBook Pro",
              category: "Laptops",
              price: 100000.0,
              description: "A high-performance laptop.",
              manufactureDate: "2023-05-15T08:30:00",
              isAvailable: true,
            },
            {
              id: 2,
              title: "Nike",
              category: "Running Shoes",
              price: 5000,
              description: "Running shoes designed for speed and comfort.",
              manufactureDate: "2023-02-20T14:45:00",
              isAvailable: true,
            },
            {
              id: 3,
              title: "Python",
              category: "Books",
              price: 500,
              description: "A language for AI",
              manufactureDate: "1925-04-10T10:10:00",
              isAvailable: false,
            },
            {
              id: 4,
              title: "Javascript",
              category: "Books",
              price: 700,
              description: "A language for Browser",
              manufactureDate: "1995-12-04T12:00:00",
              isAvailable: false,
            },
            {
              id: 5,
              title: "Dell XPS",
              category: "Laptops",
              price: 120000.0,
              description: "An ultra-slim laptop with powerful performance.",
              manufactureDate: "2023-04-25T09:15:00",
              isAvailable: true,
            },
          ];
       let task1 =()=>{

            const list = products.map((item,i)=>{
                  return (
                        <div>
                              {item.title}
                        </div>
                  )
            })

            return list;

       }   

  return (
    <div>
        <h1>Products available :</h1>
      {
               task1 ()
      }
    </div>
  )
}

export default LearnMap2;