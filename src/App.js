import './App.css';
import Address from './Components/Address.jsx';
import Age from './Components/Age.jsx';
import College from './Components/College.jsx';
import Detail from './Components/Detail.jsx';
import Details1 from './Components/Details1.jsx';
import EffectOnDifferentData from './Components/EffectOnDifferentData.jsx';
import LearnTernary from './Components/LearnTernary.jsx';
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
    {/* <Detail name="Suraj" address="Pharping" age ={22}></Detail> */}
    {/* <Details1 name="Suraj" address="Pharping" age ={22}></Details1> */}
    {/* <College name="Patan MC" address="patan"></College> */}
    {/* <LearnTernary marks={56}></LearnTernary> */}

    <EffectOnDifferentData></EffectOnDifferentData>

   </div>
    
  );
}

export default App;

/* 

*/
