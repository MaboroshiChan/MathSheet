import React, { Component, Props } from 'react';
import Latex from 'react-latex';

type LaTeXBoXProps = {
    extract: (a: string)=>void,
}

class LaTeXBox extends Component<LaTeXBoXProps>{
    
    state = {
        latex_code: "$\\frac{1}{2}$"
    };

    render(){
      return (
        <div className="TeXBox" 
             onChange={this.props.extract.bind(this)}>
            {this.state.latex_code}
        </div>)
    }
}

export default LaTeXBox;