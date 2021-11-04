import './MathBox.css';
import Proposition from '../FormulaBox/Proposition';
import Proof from '../FormulaBox/ProofType'

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