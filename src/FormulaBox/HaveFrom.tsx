import {Component} from 'react';
import FormulaBoxProps from './FormulaBoxProps';
import Button from '../Button';
import LaTeXBox from './LaTexBox';
import "./HaveFrom.css";

interface HaveFromProps extends FormulaBoxProps {
    have: string,
    from: string,
    setRoot: (index: number)=>void
}

class HaveFrom extends Component<HaveFromProps>{
    state = {
        have: this.props.have,
        from: this.props.from
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
            <div className="HaveFrom" 
                onChange={()=>this.props.setRoot(this.props.index)}>
                    <span className="have"><Button 
                        onClick={this.props.addLine.bind(this)(this.props.index, null)}
                    label={'+'} className="Add line"/>
                    Have: <LaTeXBox extract={this.setHave.bind(this)}/></span> 
                    <span className="from">From: <input></input> 
                    <Button onClick={()=>this.props.deleteLine(this.props.index)}
                    label={'-'} className="Delete line" /></span>
            </div>
        );
    }
};

export default HaveFrom;