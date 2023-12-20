import './App.css';
import Address from './Components/Address.jsx';
import Age from './Components/Age.jsx';
import Detail from './Components/Detail.jsx';
import  Name  from './Components/Name.jsx';

function App() {

  // let name = `Suraj`;
  // let age = `22`;
  // console.log(name)
  return (
   <div style={{textAlign:'center'}}>

    {/* <div style={{textAlign:'center'}}>
      <p style={{color:"red",backgroundColor:"black"}}>My name is {name} and my age is {age}.</p>

      <a href="https://www.facebook.com/" target =" ">facebook</a>

      <p><img src="./gr.jpg"></img> </p>

    </div> */}

    {/* <Name></Name>
    <Age></Age>
    <Address></Address> */}

    <Detail name="Suraj" address="Pharping"></Detail>

   </div>
    
  );
}

export default App;

/* 

*/
