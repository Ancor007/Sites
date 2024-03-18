import React from "react"

const Test_info_block = () => {
    return (
        <div className="test_info_block">
            <div className="name_block_test">
                <span className="title_block">1 блок <br/></span>
                <span className="sub_title_block">Краткое описание</span>
            </div>
            <div className="Insruction"> 
                <span className="title_instruction">Инструкция прохождения тестирования</span>
                <span className="instruction">Краткая инструкция как именно проходить тестирование</span>
            </div>
        </div>
    )

};


export default Test_info_block;