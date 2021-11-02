import React, { Component, Props } from 'react';
import { MathComponent } from 'mathjax-react';
import "./FormulaBox.css"
import Button from '../Button';
import FormulaBoxPropsType from './FormulaBoxProps';
import LateXBox from './LaTexBox';

interface FormulaBoxProps extends FormulaBoxPropsType {
  setFormula: (index: number, content: string)=>void
  handleSelection: (selected: boolean, idx: number)=>void
}

class FormulaBox extends Component<FormulaBoxProps> {

   state = {
     content: this.props.content,
     selected: false
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
       return ( // TODO: fix this
         <div className="FormulaBox" 
            onChange={()=>this.props.setFormula(this.props.index, this.state.content)}>
           <Button onClick={()=>this.props.addLine(this.props.index, null)}
            label={'+'} className={"AddLiene"} />
                <LateXBox
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