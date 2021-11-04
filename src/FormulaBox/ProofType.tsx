type HaveAndFrom = {
    have : string,
    from : string
}

type Show = {
    show : string,
    from : string
}

type Assume = {
    assume : string
}

type CalcAtom = {
    expr : string,
    reason : string
}

type Calc = {
    chain : CalcAtom[],
}

type Contradiction = {
    proof : Proof;
}

type BasicTactic = HaveAndFrom | Show | Calc | Assume;

type Induction = {
    on : string,
    hypo : string,
    base : Proof,
    step : Proof
}

type Proof = BasicTactic | Induction | Contradiction;



export default Proof;