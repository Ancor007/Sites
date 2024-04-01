import React from "react"
import { NavLink } from "react-router-dom";
import User_photo from "./User_photo";
import './lk_data.css';
import Recomend from './Recomend_block';



const ResultTest = () => {
  return (
    <div className='Result_test'>
      Здесь будут отображаться результаты теста
      <NavLink className = 'test' to="/test">Пройти тест</NavLink>
    </div>
  )
}

const Persanal_info = () => {
  return (
    <span className='Persanal_info'>
        <br />
        <div className="Data"> 
        Фамилия: Иванов<br/> 
        Имя: Иван<br />
        Возраст: 19 лет<br /> 
        </div>
    </span>
  )
}

const Hard_skills_info = () => {
  return (
    <div className='Hard_skills'>
      <div className="Hard_skills_txt">
      Hardskills List <br />
      FrontEnd <br />
      BackEnd <br />
      FullStack <br />
      </div>
    </div>
  )
}

const Edit_lk_info_button = () => {
  return(
    < a className = ' edit' href="/edit"> Редактировать</a>
  )
}

const Logoutbutton = () => {
  return (
    <a className="Logout" href="/logout"> Выйти из аккаунта</a>
  )
}

const Lk_data = () => {
  return (
    <div className="Block_lk_info">
      <div className="lk_data">
        <div className='User_card'>
          <User_photo />
          <Persanal_info />
        </div>
        <Hard_skills_info />
        <Recomend />
      </div>
      <Logoutbutton />
    </div>
  );
}

export default Lk_data;