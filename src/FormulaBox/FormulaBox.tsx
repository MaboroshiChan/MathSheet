import React, { Component, Props } from 'react';
import { MathComponent } from 'mathjax-react';
import "./FormulaBox.css"
import Button from '../Button';
import FormulaBoxPropsType from './FormulaBoxProps';

interface FormulaBoxProps extends FormulaBoxPropsType {
  setFormula: (index: number, content: string)=>void
}

class FormulaBox extends Component<FormulaBoxProps> {

   state = {
     content: this.props.content
   }

   render(): JSX.Element {
       return ( // TODO: fix this
         <div className="FormulaBox" 
            onChange={()=>this.props.setFormula(this.props.index, this.state.content)}>
           <Button onClick={()=>this.props.addLine(this.props.index, null)}
            label={'+'} className={"AddLiene"} />
                <MathComponent display={false} tex={`${this.props.index} \\text{${this.state.content}}`}/>
           <Button onClick={()=>this.props.deleteLine(this.props.index)}
            label={'-'} className={"DeleteLine"} />
         </div>
       );
   }
};

export default FormulaBox;