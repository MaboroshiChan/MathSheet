import React from 'react';
import {List} from 'immutable';
import Line from './Line';
import Message from '../Interfaces/Message';
import EquationEditor from "equation-editor-react";

type EquationProps = {
    equation: string,
    messages: Array<Message>,
    extract: (index: number, msg: Message)=>void
}

const Equation = (props: EquationProps):JSX.Element => {

    const [values, setValues] = React.useState<List<Message>>(List(props.messages));
    const [equation, setEq] = React.useState(props.equation);

    return (
        <div className="Equation">
            Equation: <br/>
            <EquationEditor value={equation} onChange={setEq} 
                autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
                autoOperatorNames="sin cos tan log ln"/>
            <br/>
            Solution:
            <br/>
            {props.messages.map((x, i)=>(
            <Line
                errorMsg={x.error}
                reason={x.reason}
                index={i} 
                latex={x.solution} 
                extract={(s:string, r:string)=>{
                    props.extract(i, {
                        solution: s,
                        reason: r, 
                        error: x.error
                    });
                }}
            ></Line>))}
        </div>
    )
}

export default Equation;