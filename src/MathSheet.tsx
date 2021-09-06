import React, { Component } from 'react';
import FormulaBox from './FormulaBox';
import Proposition from './MathBox';

class MathSheet extends Component {
    render(): JSX.Element{
        return (
        <div className="MathSheet">
             <Proposition />
        </div>);
    }
}

export default MathSheet;