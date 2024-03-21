import React from "react"

import { NavLink } from "react-router-dom";

const Reg = () => {
    return (
        <div className="Reg_module">
            <NavLink to="/login" className="back_from_reg"></NavLink>
            <div className="reg_choise_person"> Выберите роль</div>
            <input type="radio" className="reg_role_0">Исполнитель(участник проекта)</input>
            <input type="radio" className="reg_role_1">Менеджер проекта (руководитель)</input>
            <div className="reg_block_info">
                <label className="Reg_label" for="name_reg">Имя</label>
                <input className="Reg_input" type="text" id="name_reg"></input>
                <label className="Reg_label" for="name">Фамилия</label>
                <input className="Reg_input" type="text" id="surname_reg"></input>
                <label className="Reg_label" for="name">Возвраст</label>
                <input className="Reg_input" type="number" id="yo_reg"></input>
                <label className="Reg_label" for="name">e-mail</label>
                <input className="Reg_input" type="email" id="email_reg"></input>
                <label className="Reg_label" for="name">Пароль</label>
                <input className="Reg_input" type="password" id="password_reg"></input>
                <label className="Reg_label" for="name"></label>
                <input className="Reg_input" type="password" id="password_comf_reg"></input>
                <span>*еще раз</span>
                <input className="Reg_input_submit" type="submit" id="submit_reg">Зарегистрироваться</input>
            </div>
        </div>
    )

};


export default Reg;