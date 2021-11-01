import { Component, useState, FunctionComponent} from 'react';
import { MathComponent } from 'mathjax-react'
import "./LaTexBox.css";
import {myStore} from '../MathSheet/Store';
import {connect} from 'react-redux';
import { createNoSubstitutionTemplateLiteral } from 'typescript';

type LaTeXBoXProps = {
    latex_code: string,
    latex_code_from_store: string,
    extract: (a: string)=>void,
    display: boolean
}

const LaTeXBox: FunctionComponent<LaTeXBoXProps> = (props: LaTeXBoXProps) => {
    
    const [state, setState] = useState(props.latex_code);

    function clickEvent(): void{
       myStore.dispatch({
         type: "REFRESH",
         value: state
       });
       console.log(props.latex_code_from_store);
       setState(props.latex_code_from_store);
    }

      return (
        <span className="TeXBox"
             onClick={clickEvent}>
            <MathComponent tex={state}
             display={props.display}/>
        </span>
      )
}

const updateTeXBox = (_latex_code: string) => {
  return {
      latex_code_from_store: _latex_code
  }
}

const myComponent = connect(updateTeXBox)(LaTeXBox);

export default myComponent;