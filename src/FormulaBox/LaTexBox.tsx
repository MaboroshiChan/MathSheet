import { Component} from 'react';
import { MathComponent } from 'mathjax-react'
import "./LaTexBox.css";
import { createStoreHook, useSelector, createSelectorHook } from 'react-redux';

const refreshFormulaInputBox = (state, action) => {
  
}

type LaTeXBoXProps = {
    extract: (a: string)=>void,
    latex_code: string
}


class LaTeXBox extends Component<LaTeXBoXProps>{
    
    state = {
        latex_code: this.props.latex_code
    };

    clickEvent(): void{
      
    }

    render(){
      return (
        <span className="TeXBox" 
             onChange={this.props.extract.bind(this)}>
            <MathComponent tex={this.state.latex_code} display={false}/>
        </span>
      )
    }
}

export default LaTeXBox;