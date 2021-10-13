import { Component } from 'react';
import FormulaBox from '../FormulaBox/FormulaBox';
import './MathBox.css';
import HaveFrom from '../FormulaBox/HaveFrom';
import ShowBox from '../FormulaBox/Show';
import Submittable from '../Interfaces/Submittable';
import Proposition from '../FormulaBox/Proposition'

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
    data: {
        mathBox: Proposition[] 
    }
}

const myData: Proof = {
    have: "ABC",
    from : "CDF"
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