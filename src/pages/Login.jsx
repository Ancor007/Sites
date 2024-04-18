import React from "react"
import './login.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { instance } from "./axios/axios";
import { useDispatch } from "react-redux";
import { loginUser } from "./store/loginSlice";


const Login = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    const heandle_submit = async (e) => {
        e.preventDefault()
        const userData = {
            username,
            password
        } 
        try {
            const user = await instance.post( '/auth/signin', userData)
        dispatch(loginUser(user.data))
        } catch (error) {
            // Обработка ошибок
            console.error('Ошибка при регистрации:', error);
            // Добавьте действия для обработки ошибок (например, показать сообщение пользователю)
        }
        
    }


    return (
        <div className="Login_module">
            <div className="span_vhod"><span>Вход в аккаунт</span></div>
            <form className="Login_conteiner" onSubmit={heandle_submit}>
                <label className = "Reg_label" for="Username">Username</label>
                <input className="Login_input" type="text" id="Username" onChange={(e) => setUsername(e.target.value)}/> 
                <label className = "Reg_label" for="password">Пароль</label>
                <input className="Login_input" type="password" id="password" onChange={(e) => setPassword(e.target.value)}/> 
                <input className="Login_submit_button" type="submit" value="Войти"/>
                <NavLink to="/resetpassword" className="forget_password"> проблемы со входом? </NavLink> 
            </form>
            <NavLink to="/reg" className="reg_button"> Регистрация </NavLink>
        </div>
    )

};


export default Login;