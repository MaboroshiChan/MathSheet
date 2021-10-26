import { Component } from 'react';
import './MathBox.css';
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