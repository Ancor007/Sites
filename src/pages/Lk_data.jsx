import React from "react"
import { NavLink } from "react-router-dom";
import User_photo from "./User_photo";



const ResultTest = () => {
  return (
    <div className='Result_test'>
      Здесь будут отображаться резульатты теста
      <NavLink to="/test">Пройти тест</NavLink>
    </div>
  )
}

const Persanal_info = () => {
  return (
    <span className='Persanal_info'>Личные данные <br />
      Имя: <br />
      Возвраст: <br />
    </span>
  )
}

const Hard_skills_info = () => {
  return (
    <div className='Hard_skills'>
      Hardskills List <br />
      For exsample: FrontEnd
    </div>
  )
}

const Edit_lk_info_button = () => {
  return(
    <a href="/edit"> Редоктировать</a>
  )
}

const Logoutbutton = () => {
  return (
    <a href="/logout"> Выйти из аккаунта</a>
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
        <ResultTest />
      </div>
      <Logoutbutton />
    </div>
  );
}

export default Lk_data;