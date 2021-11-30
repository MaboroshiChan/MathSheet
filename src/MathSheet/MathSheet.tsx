import React, { Component, useEffect, useRef } from 'react';
import Equation from '../FormulaBox/Equation'
import Message from '../Interfaces/Message';
import axios from 'axios';
import EquationType from '../Interfaces/Equation';

/** Testing data */
let _data: EquationType = {
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

    return (
        <div>
            <Equation 
            equation={_data.equation}
            messages={_data.messages} 
            extract={(index, msg)=>{
                _data.messages[index] = msg;
                console.log(_data.messages.map(x=>x.solution));
                console.log(_data.messages.map(x=>x.reason));
            }}></Equation>
        </div>
    );
}


export default MathSheet;