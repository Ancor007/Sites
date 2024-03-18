import React from "react"
import User_photo from "./User_photo";
import { NavLink } from "react-router-dom";

const Resonse_project_post = () => {
    return(
        <div className="Resonse_project_post">
            <div className="Resonse_project_post_User_photo"><User_photo/></div>
            <span className="User_name">Иванов Иван</span>
            <div className="prochents_tests">87%</div>
            <span className="User_develep_type">Разработчик</span>
            <div className="Info_about_user_card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, at.</div>
            <NavLink to="#">Отправить приглашение на работу</NavLink>
        </div>
    )

};


export default Resonse_project_post;