import React from "react"

import { NavLink } from "react-router-dom";

const Reg = () => {
    return (
        <div className="Reg_module">
            <NavLink to="/login" className="back_from_reg"></NavLink>
            <div className="reg_choise_person"> Выберите роль</div>
            <label className="reg_role_0_label">Исполнитель(участник проекта)</label>
            <input type="radio" className="reg_role_0" id="reg_role_0" />
            <label className="reg_role_1_label">Менеджер проекта (руководитель)</label>
            <input type="radio" className="reg_role_1" id="reg_role_1" />
            <div className="reg_block_info">
                <label className="Reg_label" for="name_reg">Имя</label>
                <input className="Reg_input" type="text" id="name_reg" />
                <label className="Reg_label" for="name">Фамилия</label>
                <input className="Reg_input" type="text" id="surname_reg" />
                <label className="Reg_label" for="name">Возвраст</label>
                <input className="Reg_input" type="number" id="yo_reg" />
                <label className="Reg_label" for="name">e-mail</label>
                <input className="Reg_input" type="email" id="email_reg" />
                <label className="Reg_label" for="name">Пароль</label>
                <input className="Reg_input" type="password" id="password_reg" />
                <label className="Reg_label" for="name"></label>
                <input className="Reg_input" type="password" id="password_comf_reg" />
                <span>*еще раз</span>
                <input className="Reg_input_submit" type="submit" id="submit_reg" value="Зарегистрироваться" />
            </div>
        </div>
    )

};


export default Reg;