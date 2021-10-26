import { Component} from 'react';
import { MathComponent } from 'mathjax-react'
import "./LaTexBox.css";
import {myStore} from '../MathSheet/Store';

type LaTeXBoXProps = {
    extract: (a: string)=>void,
    latex_code: string
}

class LaTeXBox extends Component<LaTeXBoXProps>{
    
    state = {
        latex_code: this.props.latex_code
    };

    clickEvent(): void{
       myStore.dispatch({
         type: "REFRESH",
         value: this.state.latex_code
       });
    }

    changeEvent(): void{
       let s = myStore.getState();
       this.setState({
         latex_code: s
       });
       this.props.extract(s);
    }

    render(){
      return (
        <span className="TeXBox"
             onClick={this.clickEvent.bind(this)}
             onChange={this.changeEvent.bind(this)}>
            <MathComponent tex={this.state.latex_code} display={false}/>
        </span>
      )
    }
}

export default LaTeXBox;