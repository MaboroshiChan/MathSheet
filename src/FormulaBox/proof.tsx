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



export default Proof;