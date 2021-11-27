import React, { Component, useEffect } from 'react';
import Equation from '../FormulaBox/Equation'
import Message from '../Interfaces/Message';
import axios from 'axios';

/** Testing data */
let _data = {
    equation: "x ^ 2 + 2 * x = 0",
    messages: [{solution: "x + 1", 
    reason: "显然",
    error: "",},{solution: "", 
    reason: "显然",
    error: "",},{solution: "", 
    reason: "显然",
    error: "",},{solution: "", 
    reason: "显然",
    error: "",}]
}
/**
 * TODO: fix issue of returning to original input prop. 
 * @returns 
 */

const MathSheet = ():JSX.Element =>{

    const [data, setData] = React.useState(_data);

    return (
        <div>
            <Equation 
            equation={data.equation}
            messages={data.messages} 
            extract={(lst: Message[])=>{
                console.log(lst.map(x=>x.solution))
                setData({equation: data.equation, messages: lst});
            }}></Equation>
            <code>data = {data.messages.map(x=>x.solution)}</code>
        </div>
    );
}

export default MathSheet;