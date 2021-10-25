import React, { Component, Props } from 'react';
import InputBox from "./InputBox";
import {createStoreHook, createSelectorHook, useSelector, useDispatch} from "react-redux";


const InputBoxInstance = props => {

    const dispatch = useDispatch()

    const loadingEffect = useSelector(s=>s);
    
    return (
        <div className="input">
            <textarea className="input">
            </textarea>
        </div>
    )
}

export default InputBoxInstance;