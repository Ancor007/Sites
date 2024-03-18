import React, { Component } from 'react';
import { render } from "react-dom";
import './App.css';
import Header from './Header';
import Lk_data from './Lk_data';
import Recomend from './Recomend_block';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test_block from './Test';
const Main = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/lk" element={<Lk_data />} />
          <Route path="/lk" element={<Recomend />} />
          <Route path="/test" element={<Test_block />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}




export default Main;
