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
import PrivateRoute from './store/privateRoute';



const Main = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App"> 
        <Routes>
        <Route element={<PrivateRoute/>}>
          
        </Route>
        <Route path='/login' element={<Login />} />
          <Route path='/reg' element={<Reg />} />
          <Route path="/lk" element={<Lk_data />} />
          <Route path="/lk" element={<Recomend />} />
          <Route path="/test" element={<Test_block />} />
          <Route path='/create-project' element={<New_project />} />
          </Routes>
      </div>
      </Provider>
    </BrowserRouter>
  );
}




export default Main;
