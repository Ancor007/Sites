import React, { Component } from 'react';
import './App.css';
import Reg from './Register';
import Lk_data from './Lk_data';
import Login from './Login';
import Recomend from './Recomend_block';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test_block from './Test';
import New_project from './New_project';
import { Provider } from 'react-redux';
import store from './store/store';



const Main = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App"> 
        <Routes>
          <Route path="/" element={<Lk_data />} />
          <Route path="/" element={<Recomend />} />
          <Route path="/test" element={<Test_block />} />
          <Route path='/signup' element={<Reg />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/create-project' element={<New_project />} />
          </Routes>
      </div>
      </Provider>
    </BrowserRouter>
  );
}




export default Main;
