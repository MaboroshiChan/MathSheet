import React, { Component } from 'react';
import Button from '../Button';
import Equation from '../FormulaBox/Equation'
import {List} from 'immutable';
import Message from '../Interfaces/Message';

const MathSheet = (props):JSX.Element =>{

    

    return (
        <div>
            <Equation 
            equation={props.equation} 
            messages={props.message} 
            extract={(lst: Message[])=>{
                
            }}></Equation>
        </div>
    );
}

export default MathSheet;