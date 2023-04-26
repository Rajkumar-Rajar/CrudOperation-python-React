import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import First from './components/first';
import Second from './components/second';
import Three from './components/three';
import Datapage from './components/datapage';
import Remain from './components/remain';
import Login from './components/login';
// import { Routes, Route } from "react-router-dom"
import Login_page_routing from './components/login_page_routing';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <First /> */}
    {/* <Second /> */}
    {/* <Navbar /> */}
    {/* <Three /> */}
    {/* <Datapage /> */}
    {/* <Remain /> */}
    {/* <Login /> */}
    <Login_page_routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
