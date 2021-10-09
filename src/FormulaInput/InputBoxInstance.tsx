import React, { Component, Props } from 'react';
import InputBox from "./InputBox"

export default class InputBoxInstance extends Component implements InputBox {

    state = {
        tex: ""
    }

    tex(){
        return "";
    }

    render(){
        return (
            <div className="input">
                <textarea className="input">
                </textarea>
            </div>
        )
    }
} 
