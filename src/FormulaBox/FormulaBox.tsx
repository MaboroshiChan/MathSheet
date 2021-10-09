import React, { Component, Props } from 'react';
import { MathComponent } from 'mathjax-react';
import "./FormulaBox.css"
import Button from '../Button';
import FormulaBoxProps from './FormulaBoxProps';

class FormulaBox extends Component<FormulaBoxProps> {

   render(): JSX.Element {
       return (
         <div className="FormulaBox">
           <Button onClick={()=>this.props.addLine(this.props.index)}
            label={'+'} className={"Add line"} />
                <MathComponent display={false} tex={`${this.props.index} \\text{ Condition}`}/>
           <Button onClick={()=>this.props.deleteLine(this.props.index)}
            label={'-'} className={"Delete line"} />
         </div>
       );
   }
};

export default FormulaBox;