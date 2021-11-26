import React, { Component } from 'react';
import Button from '../Button';
import Equation from '../FormulaBox/Equation'
import {List} from 'immutable';
import Message from '../Interfaces/Message';

const MathSheet = ():JSX.Element =>{

    

    return (
        <div>
            <Equation 
            equation={"x ^ 2 + 2 * x = 0"} 
            messages={[{solution: "", 
                reason: "显然",
                error: "",},{solution: "", 
                reason: "显然",
                error: "",},{solution: "", 
                reason: "显然",
                error: "",},{solution: "", 
                reason: "显然",
                error: "",}]} 
            extract={(lst: Message[])=>{
                
            }}></Equation>
        </div>
    );
}

export default MathSheet;