import { Component } from 'react';
import FormulaBox from '../FormulaBox/FormulaBox';
import './MathBox.css';
import HaveFrom from '../FormulaBox/HaveFrom';
import ShowBox from '../FormulaBox/ShowFrom';
import Submittable from '../Interfaces/Submittable';
import Proposition from '../FormulaBox/Proposition';
import Proof from '../FormulaBox/Proof'

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