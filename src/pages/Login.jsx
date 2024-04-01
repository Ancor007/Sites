import React from "react"
import './login.css';
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="Login_module">
            <div className="span_vhod"><span>Вход в аккаунт</span></div>
            <div className="Login_conteiner">
                <label className = "Reg_label" for="Username">Username</label>
                <input className="Login_input" type="text" id="Username"/> 
                <label className = "Reg_label" for="password">Пароль</label>
                <input className="Login_input" type="password" id="password" /> 
                <input className="Login_submit_button" type="submit" value="Войти"/>
                <NavLink to="/resetpassword" className="forget_password"> проблемы со входом? </NavLink> 
            </div>
            <NavLink to="/reg" className="reg_button"> Регистрация </NavLink>
        </div>
    )

};


export default Login;