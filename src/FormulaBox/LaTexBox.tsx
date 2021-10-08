import React, { Component, Props } from 'react';
import Latex from 'react-latex';
import "./LaTexBox.css"

type LaTeXBoXProps = {
    extract: (a: string)=>void,
}

class LaTeXBox extends Component<LaTeXBoXProps>{
    
    state = {
        latex_code: "$\\frac{1}{2} + \\frac{1}{2} = 1$"
    };

    render(){
      return (
        <span className="TeXBox" 
             onChange={this.props.extract.bind(this)}>
            <Latex>{this.state.latex_code}</Latex>
        </span>)
    }
}

export default LaTeXBox;