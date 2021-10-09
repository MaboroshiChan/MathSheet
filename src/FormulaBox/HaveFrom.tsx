import {Component} from 'react';
import FormulaBoxProps from './FormulaBoxProps';
import Button from '../Button';
import LaTeXBox from './LaTexBox';
import "./HaveFrom.css";

class HaveFrom extends Component<FormulaBoxProps>{
    state = {
        have: "",
        from: ""
    }

    setHave(have: string){
        this.setState({
            have: have
        })
    }

    setFrom(from: string){
        this.setState({
            from: from
        })
    }
    
    render(){
        return (
            <div className="HaveFrom">
                    <span className="have"><Button onClick={()=>this.props.addLine(this.props.index)}
                    label={'+'} className="Add line"/>
                    Have: <LaTeXBox extract={this.setHave.bind(this)}/></span> 
                    <span className="from">From: <input></input> <Button onClick={()=>this.props.deleteLine(this.props.index)}
                    label={'-'} className="Delete line" /></span>
                
            </div>
        );
    }
};

export default HaveFrom;