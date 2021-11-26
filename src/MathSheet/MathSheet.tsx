import React, { Component } from 'react';
import Equation from '../FormulaBox/Equation'
import Message from '../Interfaces/Message';

const MathSheet = ():JSX.Element =>{

    let _data = {
        equation: "x ^ 2 + 2 * x = 0",
        messages: [{solution: "x ^ 2 + x + 1 = 0", 
        reason: "显然",
        error: "",},{solution: "", 
        reason: "显然",
        error: "",},{solution: "", 
        reason: "显然",
        error: "",},{solution: "", 
        reason: "显然",
        error: "",}]
    }

    const [data, setData] = React.useState(_data);

    return (
        <div>
            <Equation 
            equation={data.equation} 
            messages={data.messages} 
            extract={(lst: Message[])=>{
                setData({equation: data.equation, messages: lst});
                console.log(`lst = ${lst.map(x=>x.solution)}`);
            }}></Equation>
            <code>data = {data.messages.map(x=>x.solution)}</code>
        </div>
    );
}

export default MathSheet;