import React from "react"

const Test_body_block_first = (props) => {
    return (
        <div className="test_body_block">
            <span className="question"> Вопрос</span>
            <input type="radio" id="no" value="0" name="q1" />
            <input type="radio" id="yes" value="1" name="q1" />
        </div>
    )

};


export default Test_body_block_first;