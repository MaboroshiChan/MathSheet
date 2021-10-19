import { Component } from 'react';
import HaveFrom from './HaveFrom';
import {match, when, select} from 'ts-pattern';
import Proof from './Proof'
import ShowBox from './Show';

type ProofProps = {
    proof: Proof[]
}

export default class ProofComponent extends Component<ProofProps> {
    
    state: {
        proof: Proof[]
    }

    constructor(props){
        super(props);
        this.state = {
            proof: this.props.proof
        }
    }

    addStatement(floorNum : number, box: JSX.Element = null): void {
        let front = this.state.proof.splice(0, floorNum + 1);
        let res = [...front, box].concat(this.state.proof);
        this.setState({
            proofs : res
        });
     }

     deleteStatement(index: number): void {
        let arr = this.state.proof;
        arr.splice(index, 1);
        // TODO: get rid of the black bar.
        this.setState({
            res : arr
        });
     }

    private toJSX(pf: Proof, index: number): JSX.Element{
        return match(pf)
              .with({have: select("have"), from: select("from")}, (res)=><HaveFrom 
                addLine={this.addStatement.bind(this)} 
                deleteLine={this.deleteStatement.bind(this)}
                index={index}
                content={""}
                have={res.have}
                from={res.from}/>)
              .with({show: select("show")}, res=><ShowBox proof={[]} />)
              .otherwise(_=><div />)
     }

     render(){
         return (
            <div className="Proof">
                {this.state.proof.map((x, i)=>this.toJSX(x, i))}
            </div>
        )
     }
}