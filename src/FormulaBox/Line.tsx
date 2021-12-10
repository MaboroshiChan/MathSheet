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
            <div className="Formula">
                <LaTeXBox latex_code={latex}
                extract={handleOnchange} 
                />
             </div>
             <div className="reason">
             <input
                value={reason} 
                onChange={(e)=>{
                    let new_reason = e.target.value;
                    setReason(new_reason);
                    props.extract(latex, new_reason);
                }
            }>
             </input>
             </div>
             <div className="error">{"Error Message 1121213231312"}</div>
        </div>
    )
}

export default Line;