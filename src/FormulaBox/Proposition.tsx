import { Component } from "react";
import FormulaBox from './FormulaBox';
import Proof from './ProofType';
import ProofComponent from "./ProofComponent";
import Button from "../Button";

type PropositionState = {
    conditions: string[],
    proof: Proof[],
    selectedID: number 
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
          proof: this.props.proof,
          selectedID: null
        }
        
    }

    addCondition(index: number, cond : string): void {
        this.state.conditions.splice(index + 1, 0, cond);
        this.setState({
            conditions : this.state.conditions
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

    handleSelection(selected: boolean, idx: number){
        if(selected){
            this.setState({
                selectedID: idx,
            });
        }
        console.log(idx);
    }

    render(): JSX.Element {
        console.log(`selectedID = ${this.state.selectedID}`);
        return (<div className="Prop">
            <div className="Definitions">
                <b> Definitions </b> 
                {this.state.conditions.map((condition, idx)=>(
                    <FormulaBox selected={(idx === this.state.selectedID)}
                                handleSelection={this.handleSelection.bind(this)}
                                addLine={this.addCondition.bind(this)}
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
                <ProofComponent proof={[{have: "\\sum_{k = 0}^{100} k = \\frac{n(n+1)}{2}", from: "b"},
                 {have: "\\sum_{k = 0}^{100} k = \\frac{n(n+1)}{2}", from: "ggwe"}]} 
                setProof={this.setProof.bind(this)}/>
             </div>
        </div>);
    }
}

export default Proposition;