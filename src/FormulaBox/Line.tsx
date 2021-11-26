import React, { Component, useState, FunctionComponent} from 'react';
import LaTeXBox from './LaTeXBox';
import './Line.css';

type LineProps = {
    index: number,
    errorMsg : string,
    latex: string,
    reason: string,
    extract: (s: string)=>void
}

const Line = (props: LineProps): JSX.Element => {

    const [latex, setTex] = useState(props.latex);

    return (
        <div className="line">
            {props.index}. 
            <LaTeXBox latex_code={latex}
             extract={()=>{}} 
             ></LaTeXBox>
             <input className="reason" value={props.reason}>
             </input>
             <span className="error">{"props.errorMsg"}</span>
        </div>
    )
}

export default Line;