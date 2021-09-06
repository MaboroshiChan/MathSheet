import React, { Component, Props } from 'react';
import katex from 'katex';
import "./FormulaBox.css"

class FormulaBox extends Component {
   render(): JSX.Element {
       return (
         <div className="FormulaBox">
           This is Formula Box.
           <br/>
           This is next line.
         </div>
       );
   }
};

export default FormulaBox;