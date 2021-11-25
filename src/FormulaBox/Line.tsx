import { Component, useState, FunctionComponent} from 'react';
import LaTeXBox from './LaTeXBox';

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
        <div className="Line">
            <LaTeXBox latex_code={latex}
             extract={()=>{}} 
             ></LaTeXBox>
             <input className="reason">
                 {props.reason}
             </input>
             <span className="error">{props.errorMsg}</span>
        </div>
    )
}

export default Line;