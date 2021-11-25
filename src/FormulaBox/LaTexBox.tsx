import { Component, useState, FunctionComponent} from 'react';
import * as Editor from 'equation-editor-react';
import "./LaTexBox.css";
import {myStore} from '../MathSheet/Store';
import {connect} from 'react-redux';
import {UpdateType} from '../MathSheet/Connect';
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
    const [equation, setEquation] = useState("");

    const handleOnchange = (latex: string) => {
        setEquation(latex);
        props.extract(latex);
    }
    
    return (
        <EquationEditor
          value={equation}
          onChange={handleOnchange}
          autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
          autoOperatorNames="sin cos tan"
        />
      )
}

export default LaTeXBox;