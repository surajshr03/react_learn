import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./learncss.css";
import  "./global.css"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
<BrowserRouter>
  {/* <React.StrictMode> */}
    {/* <App /> */}
    <App></App>
  {/* </React.StrictMode> */}
</BrowserRouter>
{/* app component ko component le aba browser routing support garxa */}


  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
