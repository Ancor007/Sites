import React from "react"
import Test_info_block from "./Test_info_block";
import Test_body_block from "./Test_body_block";
import { NavLink } from "react-router-dom";

const Test_block = () => {
    return (
        <div className="test_block">
            <NavLink to="/lk">Вернуться</NavLink>
            <Test_info_block />
            <Test_body_block />
            <Test_body_block />
        </div>
    )

};


export default Test_block;