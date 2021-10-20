import React, { Component, Props } from 'react';
import { MathComponent } from 'mathjax-react'
import "./LaTexBox.css"

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