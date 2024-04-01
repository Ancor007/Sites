import React from "react"


const Test_body_block_first = (props) => {
    

     return (
        <div className="test_body_block">
            
        {props.questions.map((question, index) => (
        <div key={index}>
          <span className="question">  {question}</span>
          <input name={index} type="radio" id="first_q" value="0"  />
          <span className="first_variant_q"> {props.answers1[index]}</span>
          <br/>
          <input name={index} type="radio" id="second_q" value="1"  />
          <span className="second_varian_q"> {props.answers2[index]}</span>
        </div>
      ))}


            </div> 
    )

};


export default Test_body_block_first;