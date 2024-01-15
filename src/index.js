import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./learncss.css";
import  "./global.css"
import { BrowserRouter } from 'react-router-dom';
import MyApp from './MyApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
<BrowserRouter>
  <React.StrictMode>
    <App />
    {/* sikna lai chai App ma */}
    {/* <App></App> */}


{/* project haru MyApp ma */}

    {/* <MyApp/> */}
  </React.StrictMode>
</BrowserRouter>
{/* app component ko component le aba browser routing support garxa */}


  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
