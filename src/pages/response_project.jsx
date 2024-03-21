import React from "react"
import { NavLink } from "react-router-dom";

const New_project = () => {
    return (
        <div className="new_project_block">
            <NavLink to="/" className="back_to_lk"></NavLink>
            <div className="new_project_input_block">
                <label for="name_project_input" className="name_project_label"> Название проекта</label>
                <input type="text" id="name_project_input" className="name_project_input"/> 
                <label for="opisanie_project_input" className="opisanie_project_label">Описание</label>
                <input type="text" id="opisanie_project_input" className="opisanie_project_input" />
                <label for="numer_of_users_input" className="numer_of_users_label"> Количество участников</label>
                <input type="number" id="numer_of_users_input" className="numer_of_users_input"/>
                <label className="roli_project_input"> Роли </label>
                <input className="radio_roli_project" type="radio" id="timlid_role"> <span> ТимЛид </span></input>
                <input className="radio_roli_project" type="radio" id="programmer_role"> <span> Разрабочик </span></input>
                <input className="radio_roli_project" type="radio" id="tester_role"> <span>Тестировщик </span></input>
                <input className="radio_roli_project" type="radio" id="dizigner_role"> <span>Дизайнер </span></input>
                <input className="submit_projct" type="submit" id="sumbmit_project_create">Создать проект</input>
            </div>

        </div>

    )

};


export default New_project;