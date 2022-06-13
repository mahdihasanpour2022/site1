import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// react router 
import { BrowserRouter } from "react-router-dom";
// scss 
import "./index.scss";
// bootstrap 
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
