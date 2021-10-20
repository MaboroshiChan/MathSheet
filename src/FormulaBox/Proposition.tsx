import { Component } from "react";
import FormulaBox from './FormulaBox';
import Proof from './Proof';
import ProofComponent from "./ProofComponent";

type PropositionState = {
    conditions: string[],
    proof: Proof[]
}

type PropositionProps = {
    conditions: string[],
    proof: Proof[]
}

class Proposition extends Component<PropositionProps> {

    state : PropositionState;

    constructor(props){
        super(props);
        this.state = {
          conditions : this.props.conditions,
          proof: this.props.proof
        }
        
    }

    addCondition(cond : string): void {
        this.setState({
            conditions : [...this.state.conditions, cond]
        });
    }

    updateInfo(): void{
        return;
    }

//    deleteProof(floorNum : number): void {
//       let arr = this.state.data;/
//      arr.splice(floorNum, 1);
//      // TODO: get rid of the black bar.
//        this.setState({
//            data : arr
//        });
//    }

    deleteCondition(floorNum: number): void {
        let arr = this.state.conditions;
        arr.splice(floorNum,1);
        this.setState({
            condition: arr
        })
    }

    setCondition(index: number, condition: string){
        return; // TODO: implement this
    }

    setProof(pfs: Proof[]){
        this.setState({
            proof: pfs
        });
    }

    submit(url: string): void{
        return;
    }

    render(): JSX.Element {
        return (<div className="Prop">
            <div className="Definitions">
                <b> Definitions </b>
                {this.state.conditions.map((condition, idx)=>(
                    <FormulaBox addLine={this.addCondition.bind(this)} 
                                deleteLine={this.deleteCondition.bind(this)}
                                index={idx}
                                content={condition}
                                setFormula={this.setCondition.bind(this)}/>
                ))}
            </div>
            <br/>
            <h3>
            </h3>
            <div className="Proof">
                <b>Proof: </b> 
                <ProofComponent proof={this.props.proof} 
                setProof={this.setProof.bind(this)}/>
             </div>
        </div>);
    }
}

export default Proposition;