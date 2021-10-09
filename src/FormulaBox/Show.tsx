import React, { Component, Props } from 'react';
import FormulaBoxProps from './FormulaBoxProps';
import ProofBox from './proof';

export default class ShowBox extends Component<FormulaBoxProps> {
    render(){
        return (
            <div className="Show">
               <ProofBox /> 
            </div>
        )
    }
}