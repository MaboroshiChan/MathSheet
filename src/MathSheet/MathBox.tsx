import { Component } from 'react';
import FormulaBox from '../FormulaBox/FormulaBox';
import './MathBox.css';
import HaveFrom from '../FormulaBox/HaveFrom'

type HaveAndFrom = {
    have : string;
    from : string;
}

type Show = {
    show : string;
}

type CalcAtom = {
    expr : string;
    reason : string;
}

type Calc = {
    chain : CalcAtom[];
}

type Contradiction = {
    proof : Proof;
}

type BasicTactic = HaveAndFrom | Show | Calc;

type Induction = {
    on : string;
    hypo : string;
    base : Proof;
    step : Proof;
}

type Proof = BasicTactic | Induction | Contradiction;

type MathBoxState = {
    conditions : string[],
    proof : Proof[],
    data : number[]
}

interface Submittable {
    submit(): void;
}

class PlainText extends Component implements Submittable {
    text : string;
    constructor(props){
        super(props);
        this.text = props.text;
    }
    submit(): void {
        let serailized = JSON.stringify({text: this.text});
        console.log(serailized);
    }

    render(): JSX.Element {
       return (<br/>)//(<FormulaBox addLine={()=>{}} index={0} deleteLine={()=>{}}>{this.text}</FormulaBox>);
    }
}

class Proposition extends Component implements Submittable {

    state : MathBoxState;

    constructor(props){
        super(props);
        this.state = {
          conditions : ["Input your conditions here..."],
          proof : [],
          data : [1]
        }
        
    }

    addCondition(cond : string): void {
        this.setState({
            conditions : [...this.state.conditions, cond]
        });
    }

    submit(): void {
        let serialized : string 
          = JSON.stringify({
              conditions: this.state.conditions,
              proof: this.state.proof
            });
        console.log(serialized);
        //TODO: complete this.
    }

    updateInfo(): void{
        return;
    }

    addNewLine(floorNum : number): void {
       this.setState(state=>{
           let front = this.state.data.splice(0, floorNum + 1);
           let res = [...front, 0].concat(this.state.data);
           return {
               data : res
           };
       });
    }

    deleteProof(floorNum : number): void {
        let arr = this.state.data;
        arr.splice(floorNum, 1);
        // TODO: get rid of the black bar.
        this.setState({
            data : arr
        });
    }

    deleteCondition(floorNum: number): void {
        let arr = this.state.conditions;
        arr.splice(floorNum,1);
        this.setState({
            condition: arr
        })
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
                    />
                ))}
            </div>
            <br/>
            <h3>
            </h3>
            <div className="Proof">
                <b>Proof: </b> 
                {this.state.data.map((_, idx)=>(
                <HaveFrom addLine={this.addNewLine.bind(this)}
                 deleteLine={this.deleteProof.bind(this)}
                 index={idx}
                 content={"My content"}/>
                ))}
             </div>
        </div>);
    }
}

export default Proposition;