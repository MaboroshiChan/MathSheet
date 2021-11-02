import { Component, useState, FunctionComponent} from 'react';
import { MathComponent } from 'mathjax-react'
import "./LaTexBox.css";
import {myStore} from '../MathSheet/Store';
import {connect} from 'react-redux';

type LaTeXBoXProps = {
    latex_code: string,
    latex_code_from_store: string,
    extract: (a: string)=>void,
    display: boolean,
    inSelection: (selected: boolean)=>void
}

type LaTexBoxState = {
  selected: boolean,
  content: string
}

const LaTeXBox: FunctionComponent<LaTeXBoXProps> = (props: LaTeXBoXProps) => {
    
    const [state, setState] = useState<LaTexBoxState>({
      selected: false,
      content: props.latex_code
    });

    function clickEvent(): void{
      if(!state.selected){
          myStore.dispatch({
            type: "REFRESH",
            value: state.content
          });
          setState({
            selected: true,
            content: state.content
          });
      }
      else{
          setState({
            selected: false,
            content: props.latex_code_from_store
          })
      }
       
       // TODO: connect to the editor
    }

      return (
        <span className="TeXBox"
             onClick={clickEvent}>
            <MathComponent 
             tex={state.selected? 
              props.latex_code_from_store 
              : state.content}
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