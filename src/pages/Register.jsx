import React, { useState } from "react"
import './reg.css';
import { NavLink } from "react-router-dom";

const Reg = () => {

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [age, setAge] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [comfpassword, setComfpassword] = useState()

    const heandle_submit = async (e) => {
        e.preventDefault()
        console.log(name,surname, age, username, password, comfpassword)
    }

    return (
        <div className="Reg_module">
        <div className="singUpxD">Регистрация</div>
            {/* <NavLink to="/login" ><div className="back_img"></div></NavLink> */}
            {/* <div className="backround-button-role">
                <div className="reg_choise_person"> Выберите роль</div>
            </div> */}
            {/* <label className="reg_role_0_label">исполнитель(участник проекта)</label>
            <input type="radio" className="reg_role_0" id="reg_role_0" />
            <label className="reg_role_1_label">Менеджер проекта (руководитель)</label>
            <input type="radio" className="reg_role_1" id="reg_role_1" /> */}

            
            <form className="reg_block_info" onSubmit={heandle_submit}>
                <label className="Reg_label" for="name_reg" >Имя</label> 
                <input className="Reg_input" type="text" id="name_reg" onChange={(e) => setName(e.target.value)}/>
                <label className="Reg_label" for="name">Фамилия</label>
                <input className="Reg_input" type="text" id="surname_reg" onChange={(e) => setSurname(e.target.value)}/>
                <label className="Reg_label" for="name">Возраст</label>
                <input className="Reg_input" type="number" id="yo_reg" onChange={(e) => setAge(e.target.value)}/><br/>
                <label className="Reg_label" for="name">Логин</label>
                <input className="Reg_input" type="text" id="username_reg" onChange={(e) => setUsername(e.target.value)}/>
                <label className="Reg_label" for="name">Пароль</label>
                <input className="Reg_input" type="password" id="password_reg" onChange={(e) => setPassword(e.target.value)}/>
                <label className="Reg_label" for="name">Пароль</label>
                <input className="Reg_input" type="password" id="password_comf_reg" onChange={(e) => setComfpassword(e.target.value)}/>
                <span className="span_est">*еще раз</span>
                <input className="Reg_input_submit" type="submit" id="submit_reg" value="Зарегистрироваться" />
            </form>
        </div>
    )

};


export default Reg;