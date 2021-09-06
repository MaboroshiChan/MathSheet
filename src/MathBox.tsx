import { type } from 'os';
import React, { Component, Props } from 'react';
import FormulaBox from './FormulaBox';
import logo from './logo.svg';

type HaveFrom = {
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

type BasicTactic = HaveFrom | Show | Calc;

type Induction = {
    on : string;
    hypo : string;
    base : Proof;
    step : Proof;
}

type Proof = BasicTactic | Induction | Contradiction;

class Proposition extends Component{
    name : string;
    conditions : string[];
    proof : Proof[];

    addCondition(cond : string): void {
        this.conditions.push(cond);
    }

    changeName(newName : string): void {
        this.name = newName;
    }

    render(): JSX.Element {
        return (<div className="Proposition"> Proposition</div>)
    }
}

export default Proposition;
