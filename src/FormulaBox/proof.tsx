import { Component } from 'react';
import FormulaBox from '../FormulaBox/FormulaBox';
import HaveFrom from './HaveFrom';

type MathBox = {
    proofs : JSX.Element[];
}

export default class ProofBox extends Component {
    state: MathBox;
    constructor(props){
        super(props);
        this.state = {
            proofs: [<FormulaBox
            addLine={this.addStatement.bind(this)}
            deleteLine={this.deleteStatement.bind(this)}
            index={0}
            content={"haha"}/>]
        }
    }

    addStatement(floorNum : number, box: JSX.Element): void {
        let front = this.state.proofs.splice(0, floorNum + 1);
        let res = [...front, box].concat(this.state.proofs);
        console.log("res " + res.length)
        this.setState({
            proofs : res
        });
     }

     deleteStatement(index: number): void {
        let arr = this.state.proofs;
        arr.splice(index, 1);
        // TODO: get rid of the black bar.
        this.setState({
            res : arr
        });
     }

     render(){
         return (
            <div className="StatementBox">
                {this.state.proofs}
            </div>
        )
     }
}