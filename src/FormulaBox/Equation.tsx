import React, { Component, Props } from 'react';
import LaTexBox from './LaTeXBox';
import {List} from 'immutable';
import Line from './Line';
import { string } from 'fp-ts';
import Message from '../Interfaces/Message';
import EquationEditor from "equation-editor-react";

type EquationProps = {
    equation: string,
    messages: Array<Message>,
    extract: (lst: Message[])=>void
}

const Equation = (props: EquationProps):JSX.Element => {

    const [values, setValues] = React.useState<List<Message>>(List(props.messages));
    const [equation, setEq] = React.useState(props.equation);

    return (
        <div className="Equation">
            Equation: <br/>
            <EquationEditor value={equation} onChange={setEq} 
                autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
                autoOperatorNames="sin cos tan"/>
            <br/>
            Solution:
            <br/>
            {props.messages.map((x, i)=>(
            <Line
                errorMsg={x.error}
                reason={x.reason}
                index={i} 
                latex={x.solution} 
                extract={(str: string)=>{
                    const new_values = values.set(i, {
                        solution: str,
                        reason: x.reason,
                        error: x.error
                    });
                    setValues(new_values);
                    console.log(`new value = ${new_values.toArray()}}`);
                    props.extract(new_values.toArray());
                }}
            ></Line>))}
        </div>
    )
}

export default Equation;