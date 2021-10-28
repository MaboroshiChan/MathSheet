import { Component, useState, FunctionComponent} from 'react';
import { MathComponent } from 'mathjax-react'
import "./LaTexBox.css";
import {myStore} from '../MathSheet/Store';
import {connect} from 'react-redux';

type LaTeXBoXProps = {
    latex_code: string,
    extract: (a: string)=>void
}

const LaTeXBox: FunctionComponent<LaTeXBoXProps> = (props) => {
    
    const [state, _] = useState(props);

    function clickEvent(): void{
       myStore.dispatch({
         type: "REFRESH",
         value: state.latex_code
       });
    }

      return (
        <span className="TeXBox"
             onClick={clickEvent}>
            <MathComponent tex={state.latex_code}
             display={false}/>
        </span>
      )
}

const updateTeXBox = (_latex_code: string) => {
  return {
      latex_code: _latex_code
  }
}

export default connect(updateTeXBox)(LaTeXBox);