import React from "react"

import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="Login_module">
            <span>Вход в аккаунт</span>
            <div className="Login_conteiner">
                <label for="email">e-mail</label>
                <input className="Login_input" type="email" id="email"/> 
                <label for="password">Пароль</label>
                <input className="Login_input" type="password" id="password" /> 
                <input className="Login_submit_button" type="submit" />
                <NavLink to="/resetpassword" className="forget_password"> проблемы со входом? </NavLink> 
            </div>
            <NavLink to="registrion" className="reg_button"> Регистрация </NavLink>
        </div>
    )

};


export default Login;