import React, { Component, useState, FunctionComponent} from 'react';
import LaTeXBox from './LaTeXBox';
import './Line.css';

type LineProps = {
    index: number,
    errorMsg : string,
    latex: string,
    reason: string,
    extract: (s: string, r: string)=>void
}

const Line = (props: LineProps): JSX.Element => {

    const [latex, setTex] = useState(props.latex);
    const [reason, setReason] = useState(props.reason);

    const handleOnchange = (solution: string)=>{
        props.extract(solution, reason);
        console.log(`reason = ${reason}`)
        setTex(solution);
    }

    return (
        <div className="line">
            {props.index}. 
            <LaTeXBox latex_code={latex}
             extract={handleOnchange} 
             ></LaTeXBox>
             <input className="reason"
             value={reason} 
             onChange={(e)=>{
                 setReason(e.target.value)
                 props.extract(latex, reason);
                }
               }>
             </input>
             <span className="error">{"props.errorMsg"}</span>
        </div>
    )
}

export default Line;