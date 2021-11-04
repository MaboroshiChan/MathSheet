import React, { Component, Props } from 'react';
import "./FormulaBox.css"
import Button from '../Button';
import FormulaBoxPropsType from './FormulaBoxProps';
import LateXBox from './LaTexBox';

interface FormulaBoxProps extends FormulaBoxPropsType {
  setFormula?: (index: number, content: string)=>void
  handleSelection?: (selected: boolean, idx: number)=>void
  selected: boolean
}

class FormulaBox extends Component<FormulaBoxProps> {

   state = {
     content: this.props.content,
     selected: this.props.selected
   }

   extract(a: string): void{
      return;
   }

   handleSelection(selected: boolean){
      this.setState({
        selected: selected
      });
      this.props.handleSelection(selected, this.props.index);
   }

   render(): JSX.Element {
       let className = this.state.selected ? "FormulaBoxSelected" : "FormulaBox";
       console.log(`classname = ${this.state.selected}`);
       return ( // TODO: fix this
         <div className={className}
            onChange={()=>this.props.setFormula(this.props.index, this.state.content)}>
           <Button onClick={()=>this.props.addLine(this.props.index, null)}
            label={'+'} className={"AddLine"} />
                <LateXBox
                 selected={this.props.selected}
                 inSelection={this.handleSelection.bind(this)}
                 extract={this.extract.bind(this)}
                 display={false} 
                 latex_code={`${this.props.index} \\forall x, P(x)`}/>
           <Button onClick={()=>this.props.deleteLine(this.props.index)}
            label={'-'} className={"DeleteLine"} />
         </div>
       );
   }
};

export default FormulaBox;