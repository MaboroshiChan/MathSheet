import React, { Component, Props } from 'react';
import { MathComponent } from 'mathjax-react';
import "./FormulaBox.css"
import Button from '../Button';
import FormulaBoxPropsType from './FormulaBoxProps';
import LateXBox from './LaTexBox';

interface FormulaBoxProps extends FormulaBoxPropsType {
  setFormula: (index: number, content: string)=>void
}

class FormulaBox extends Component<FormulaBoxProps> {

   state = {
     content: this.props.content
   }

   extract(a: string): void{
      return;
   }

   render(): JSX.Element {
       return ( // TODO: fix this
         <div className="FormulaBox" 
            onChange={()=>this.props.setFormula(this.props.index, this.state.content)}>
           <Button onClick={()=>this.props.addLine(this.props.index, null)}
            label={'+'} className={"AddLiene"} />
                <LateXBox
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