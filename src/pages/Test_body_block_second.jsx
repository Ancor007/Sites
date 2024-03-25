import React from "react"

const Test_body_block_second = (props) => {
    return (
        <div className="Test_body_block_second">
      {props.questions.map((question, index) => (
        <div key={index}>
            <span className="question">{question}</span>
            <span className="span_before_radio">никогда</span>
            <input className="a_1" type="radio" id="q1_1" value="0" name={index} />
            <input className="a_2" type="radio" id="q1_2" value="1" name={index} />
            <input className="a_3" type="radio" id="q1_3" value="2" name={index} />
            <input className="a_4" type="radio" id="q1_4" value="3" name={index} />
            <input className="a_5"type="radio" id="q1_5" value="4" name={index} />
            <span className="span_after_radio">постоянно</span>
        </div>
      ))}
            
            
        </div>
    )

};


export default Test_body_block_second;