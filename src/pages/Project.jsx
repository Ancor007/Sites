import React from "react"
import { NavLink } from "react-router-dom";

const Header = () => {
    return ( <NavLink to="/lk">
      <div className='lk_txt'>Личный кабинет</div>
      <div className="lk_icon" />
      </NavLink>
    )
}
export default Header;