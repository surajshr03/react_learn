import React, { useState } from "react";

const Form3 = () => {

      const [day,setDay]= useState("Sunday");
      const [gender,setGender]= useState("male");

      let onSubmit = (e) => {
            e.preventDefault();
            let data = {
             day:day,
             Gender:gender
            }
            console.log(data)
          };

          let days = [
            {
              label: "Sunday",
              value: "day1",
            },
            {
              label: "Monday",
              value: "day2",
            },
            {
              label: "Tuesday",
              value: "day3",
            },
            {
              label: "Wednesday",
              value: "day4",
            },
            {
              label: "Thursday",
              value: "day5",
            },
            {
              label: "Friday",
              value: "day6",
            },
            {
              label: "Saturday",
              value: "day7",
            },
          ];
          let genders = [
            {label:"Male", value:"male"},
            {label:"Female", value:"female"},
            {label:"Other", value:"other"},
        
          ]
 
      return (
            // <div className='container'>
            //     <form onSubmit={onSubmit}>
    
            //         {/* <div>
            //             <label>Day:</label>
            //             <select
            //                 value={day}
            //                 onChange={(e) => {
            //                     setDay(e.target.value)
            //                 }}>
            //                 <option value='Sunday'>Sunday</option>
            //                 <option value='Monday'>Monday</option>
            //                 <option value='Tuesday'>Tuesday</option>
            //                 <option value='Wednesday'>Wednesday</option>
            //                 <option value='Thursday'>Thursday</option>
            //                 <option value='Friday'>Friday</option>
            //                 <option value='Saturday'>Saturday</option>
            //             </select>
            //         </div>*/}

                   

                    
            //         <button type='submit' >Proceed</button>
            //     </form>
            // </div>
      //       <form>
      //       <label htmlFor="daySelect">Select a day:</label>
      //       <select id="daySelect">
      //         {days.map((item,i) => (
      //           <option  value={item.value}>{item.label}</option>
      //         ))}
      //       </select>
      
      //       <button type="submit">Proceed</button>
      //     </form>
      //       <form onSubmit={onSubmit}>
      //       <label htmlFor="genderSelect">Select a day:</label>
      //       <select 
      //       id="genderSelect"
            
      //       >
      //         {genders.map((item,i) => (
      //           <option  value={item.value} key={i}>{item.label}</option>
      //         ))}
      //       </select>
      
      //       <button type="submit">Proceed</button>
      //     </form>

      <div></div>
        );
      };
    
        
    
    
    export default Form3;




//     import React, { useState } from 'react'

//     export const Form3 = () => {
    
//         let [day, setDay] = useState("day2")
//         let [gender, setGender] = useState("male")
//         let onSubmit = (e)=> {
//             e.preventDefault()
    
//             let data = {
//                 day : day,
//                 gender : gender
//             }
//             console.log(data)
//         }
    
//         let days = [
//             {
//               label: "Sunday",
//               value: "day1",
//             },
//             {
//               label: "Monday",
//               value: "day2",
//             },
//             {
//               label: "Tuesday",
//               value: "day3",
//             },
//             {
//               label: "Wednesday",
//               value: "day4",
//             },
//             {
//               label: "Thursday",
//               value: "day5",
//             },
//             {
//               label: "Friday",
//               value: "day6",
//             },
//             {
//               label: "Saturday",
//               value: "day7",
//             },
//           ];
    
    
          
//             let list = days.map((item, i )=> {
//                 // <option value = "day2">Monday</option>
//                 return (
//                     <option key = {i} value = {item.value}>{item.label}</option>
//                 )
//             })
        
    
//             let genders = [
//                 {label:"Male", value:"male"},
//                 {label:"Female", value:"female"},
//                 {label:"Other", value:"other"},
            
//             ]
          
//             let list1 = genders.map((item, i)=> {
//                 return (
//                     <option key = {i} value = {item.value}>{item.label}</option>
//                 )
//             })
    
    
//       return (
        
//         <div>
//             <form
//                 onSubmit = {onSubmit}
//             >
//                 <div>
//                     <label>Day:</label>
//                     <select
//                         value = {day}
//                         onChange = {(e)=> 
//                             setDay(e.target.value)
//                         }>
//                         {/* <option value = "day1">Sunday</option>
//                         <option value = "day2">Monday</option>
//                         <option value = "day3">Tuesday</option>
//                         <option value = "day4">Wednesday</option>
//                         <option value = "day5">Thursday</option>
//                         <option value = "day6">Friday</option>
//                         <option value = "day7">Saturday</option> */}
    
//                         {list}
//                     </select>
    
//                     <select
//                         value = {gender}
//                         onChange = {(e)=> 
//                             setGender(e.target.value)
//                         }>
//                         {list1}
//                     </select>
//                 </div>
//                 <button type = "submit"> Proceed</button>
//             </form>
//         </div>
//       )
//     }
    