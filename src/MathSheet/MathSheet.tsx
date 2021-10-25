import React, { Component } from 'react';
import FormulaBox from '../FormulaBox/FormulaBox';
import Proposition from '../FormulaBox/Proposition';
import Button from '../Button';
import Proof from '../FormulaBox/Proof';


type MathSheetState = {
    num : number,
    props : Proposition[]
}

class MathSheet extends Component {
    state : MathSheetState
    constructor(props){
        super(props);
        this.state = {
            num : 0,
            props : []
        }
    }

    increment(): void {
        this.setState({
            num : this.state.num + 1,
            props : [...this.state.props, <Proposition conditions={["WTF"]} proof={[]} />] // need to fill props.
        });
    }

    fetchData(url: string):void{
        return;
    }

    render(): JSX.Element{
        return (
        <div className="MathSheet">
             {this.state.props}
             <Button onClick={this.increment.bind(this)}
              label={'++'}
              className={"AddBox"} />
        </div>);
    }
}

export default MathSheet;