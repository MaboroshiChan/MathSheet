import {Component} from 'react';
import FormulaBoxProps from './FormulaBoxProps';
import Button from '../Button';
import LaTeXBox from './LaTexBox';
import "./HaveFrom.css";

interface HaveFromProps extends FormulaBoxProps {
    have: string,
    from: string,
    setRoot: (index: number)=>void,
    handleSelection: (selected: boolean, idx: number)=>void,
    selected: boolean
}

class HaveFrom extends Component<HaveFromProps>{
    state = {
        have: this.props.have,
        from: this.props.from,
        selected: this.props.selected
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

    handleSelection(selected: boolean){
        this.setState({
            selected: selected
        });
    }
    
    render(){
        return (
            <div className="HaveFrom" 
                onChange={()=>this.props.setRoot(this.props.index)}>
                    <span className="have"><Button 
                        onClick={()=>this.props.addLine.bind(this)(this.props.index, null)}
                    label={'+'} className="Add line"/>
                    Have: <LaTeXBox
                    selected={this.state.selected}
                    inSelection={this.handleSelection.bind(this)} 
                    display={true}
                    extract={this.setHave.bind(this)}
                    latex_code={this.state.have}/></span> 
                    <span className="from">From: <input value={this.state.from}></input> 
                    <Button onClick={()=>this.props.deleteLine(this.props.index)}
                    label={'-'} className="Delete line" /></span>
            </div>
        );
    }
};

export default HaveFrom;