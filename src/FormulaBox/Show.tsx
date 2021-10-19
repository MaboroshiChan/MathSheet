import React, { Component, Props } from 'react';
import FormulaBoxProps from './FormulaBoxProps';
import ProofComponent from './ProofComponent';
import Proof from './Proof';

interface ShowBoxProps {
    proof: Proof[]
}

export default class ShowBox extends Component<ShowBoxProps> {

    state : {proof: Proof[]}

    constructor(props){
        super(props);
        this.state = {
            proof: this.props.proof
        }
    }

    render(){
        return (
            <div className="Show">
               <ProofComponent proof={this.props.proof} /> 
            </div>
        )
    }
}