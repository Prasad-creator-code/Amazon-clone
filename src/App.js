import './App.css';
import React from 'react';
import Header from './Header.js';
import Home from './Home';
import Checkout from "./checkout.js";
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Routes>
        <Route path="/" element={ <div><Header/><Home/> </div>} />
        <Route path="/checkout" element={<div><Header/> <Checkout/></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
