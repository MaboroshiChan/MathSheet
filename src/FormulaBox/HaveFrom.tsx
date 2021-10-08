import {Component} from 'react';
import FormulaBoxProps from './FormulaBoxProps';
import Button from '../Button';
import LaTeXBox from './LaTexBox';

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
                <Button onClick={()=>this.props.addLine(this.props.index)}
                    label={'+'} className="Add line"/>
                    Have: <LaTeXBox extract={this.setHave.bind(this)}/>   
                    From: <LaTeXBox extract={this.setFrom.bind(this)}/>
                <Button onClick={()=>this.props.deleteLine(this.props.index)}
                    label={'-'} className="Delete line" />
            </div>
        );
    }
};

export default HaveFrom;