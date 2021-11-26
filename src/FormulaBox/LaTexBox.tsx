import React, { Component, useState, FunctionComponent} from 'react';
import * as Editor from 'equation-editor-react';
import "./LaTexBox.css";
import {connect} from 'react-redux';
import EquationEditor from "equation-editor-react";
import { extract } from 'fp-ts/lib/Tuple';

type LaTeXBoXProps = {
    latex_code: string,
    extract: (a: string)=>void,
}

type LaTexBoxState = {
  content: string,
}

const LaTeXBox: FunctionComponent<LaTeXBoXProps> = (props: LaTeXBoXProps) => {
    const [equation, setEquation] = useState(props.latex_code);

    const handleOnchange = (a: string) => {
        setEquation(a);
        props.extract(a);
    }
    
    return (
        <span className="Editor">
            <EquationEditor
                value={equation}
                onChange={handleOnchange}
                autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
                autoOperatorNames="sin cos tan"
            />
        </span>
      )
}

export default LaTeXBox;