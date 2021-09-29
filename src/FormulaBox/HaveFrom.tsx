import React, { Component, Props } from 'react';
import FormulaBoxProps from './FormulaBoxProps';
import Button from '../Button';
import LaTeXBox from './LaTexBox';

class HaveFrom extends Component<FormulaBoxProps>{
    state = {
        have: "",
        from: ""
    }

    extractFunc(have: string, from: string){
        this.setState({
            have: have,
            from: from
        });
    }
    
    render(){
        return (
            <div className="HaveFrom">
                <Button onClick={()=>this.props.addLine(this.props.index)}
                    label={'+'} className={"Add line"} />
                    Have <LaTeXBox extract={this.extractFunc.bind(this)}/>
                    From <LaTeXBox extract={this.extractFunc.bind(this)}/>
                <Button onClick={()=>this.props.deleteLine(this.props.index)}
                    label={'-'} className={"Delete line"} />
            </div>
        );
    }
};