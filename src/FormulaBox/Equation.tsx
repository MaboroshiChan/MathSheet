import React, { Component, Props } from 'react';
import LaTexBox from './LaTeXBox';
import {List} from 'immutable';
import Line from './Line';
import { string } from 'fp-ts';
import Message from '../Interfaces/Message';

type EquationProps = {
    equation: string,
    messages: Array<Message>,
    extract: (lst: Message[])=>void
}

const Equation = (props: EquationProps):JSX.Element => {

    const [values, setValues] = React.useState<List<Message>>(List(props.messages));

    return (
        <div className="Equation">
            {props.messages.map((x, i)=>(
            <Line
                errorMsg={x.error}
                reason={x.reason}
                index={i} 
                latex={x.solution} 
                extract={(str: string)=>{
                    setValues(values.set(i, {
                        solution: str,
                        reason: x.reason,
                        error: x.error
                    }))
                }}
            ></Line>))}
        </div>
    )
}

export default Equation;