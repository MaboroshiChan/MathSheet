import { Component } from 'react';
import HaveFrom from './HaveFrom';
import {match, when, select} from 'ts-pattern';
import Proof from './Proof'
import ShowBox from './ShowFrom';

type ProofProps = {
    proof: Proof[]
    setProof: (pfs: Proof[])=>void
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

   private addStatement(floorNum : number, box: JSX.Element = null): void {
        let front = this.state.proof.splice(0, floorNum + 1);
        let res = [...front, box].concat(this.state.proof);
        this.setState({
            proofs : res
        });
     }

    private deleteStatement(index: number): void {
        let arr = this.state.proof;
        arr.splice(index, 1);
        // TODO: get rid of the black bar.
        this.setState({
            res : arr
        });
     }

    private setHaveFrom(){
        this.setState({
            proof: [...this.state.proof] // TODO implement this.
        })
    }

    private setShowFrom(): void{ // TODO implement this
        return;
    }

    private toJSX(pf: Proof, index: number): JSX.Element{
        return match(pf)
              .with({have: select("have"), from: select("from")}, (res)=><HaveFrom
                setRoot={this.setHaveFrom.bind(this)}
                addLine={this.addStatement.bind(this)} 
                deleteLine={this.deleteStatement.bind(this)}
                index={index}
                content={""}
                have={res.have}
                from={res.from}/>)
              .with({show: select("show"), from: select("from")}, (res)=>
              <ShowBox show={res.show} from={res.from}
                setRoot={this.setShowFrom.bind(this)}
                addLine={this.addStatement.bind(this)} 
                index={index} 
                deleteLine={this.deleteStatement.bind(this)} 
                content='' />)
              .otherwise(_=><div />);
     }

     render(){
         return (
            <div className="Proof" onChange={()=>this.props.setProof(this.state.proof)}>
                {this.state.proof.map((x, i)=>this.toJSX(x, i))}
            </div>
        )
     }
}