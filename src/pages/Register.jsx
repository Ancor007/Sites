import React, { useState } from "react"
import './reg.css';
import { instance } from "./axios";
import axios from "axios";

const Reg = () => {

    const [name, setName] = useState()
    const [lastname, setSurname] = useState()
    const [age, setAge] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setComfpassword] = useState()
    const [email, setEmail] = useState()

    const heandle_submit = async (e) => {
        e.preventDefault();
    
        // Проверка соответствия паролей
        if (password !== confirmPassword) {
            console.error("Пароли не совпадают");
            return;
        }

        const ageInt = parseInt(age, 10);
        if (isNaN(ageInt)) {
            console.error("Некорректное значение возраста");
            return;
        }
    
        // Создание объекта данных пользователя
        const userData = {
            name,
            lastname,
            age: ageInt,
            username,
            password,
            email
        };
        try {
            const response = await axios.post('http://localhost:8080/auth/signup', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            // Обработка ошибок
            console.error('Ошибка при регистрации:', error);
            // Добавьте действия для обработки ошибок (например, показать сообщение пользователю)
        }
    };
    

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