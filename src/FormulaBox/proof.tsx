import { Component } from 'react';
import FormulaBox from '../FormulaBox/FormulaBox';

export default class ProofBox extends Component {
    state = {
        proofs: []
    }
    addStatement(floorNum : number): void {
        this.setState(state=>{
            let front = this.state.proofs.splice(0, floorNum + 1);
            let res = [...front, 0].concat(this.state.proofs);
            return {
                data : res
            };
        });
     }

     deleteStatement(index: number): void {
        let arr = this.state.proofs;
        arr.splice(index, 1);
        // TODO: get rid of the black bar.
        this.setState({
            data : arr
        });
     }

     render(){
         return (
            <div className="StatementBox">
                {this.state.proofs.map((_, index)=><FormulaBox 
                addLine={this.addStatement.bind(this)}
                deleteLine={this.deleteStatement.bind(this)}
                index={index}
                content={"haha"}
                />)}
            </div>
        )
     }
}