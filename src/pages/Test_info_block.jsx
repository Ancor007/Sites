import React from "react"

const Test_info_block_second = (props) => {
    return (
        <div className="test_info_block_second">
            <div className="name_block_test">
                <span className="title_block">{props.number_block + " блок" }<br/></span>
                <span className="sub_title_block">Название</span>
            </div>
            <div className="Insruction"> 
                <span className="title_instruction">Инструкция по прохождению тестирования</span>
                <div>
      {props.number_block === 1 && <div className="instruction">{props.info}</div>}
      {props.number_block === 2 && <div> <span className="instruction">{props.info}</span> <span className="for_2_test_more_info">{props.moreinfo}</span></div>}</div>
                

            </div>
        </div>
    )

};


export default Test_info_block_second;