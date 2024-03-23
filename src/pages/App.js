import React, { Component } from 'react';
import './App.css';
import Reg from './Register';
import Header from './Header';
import Lk_data from './Lk_data';
import Login from './Login';
import Recomend from './Recomend_block';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test_block from './Test';
import New_project from './New_project';
const Main = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/lk" element={<Lk_data />} />
          <Route path="/lk" element={<Recomend />} />
          <Route path="/test" element={<Test_block />} />
          <Route path='/reg' element={<Reg />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-project' element={<New_project />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}




export default Main;
