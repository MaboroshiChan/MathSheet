import React, { Component, Props } from 'react';
import InputBox from "./InputBox";
import {createStoreHook, createSelectorHook, useSelector, useDispatch} from "react-redux";


export const refreshReducer = (state, action)=>{
    return;
}

export const InputBoxInstance = props => {

    let x = 12;
    let y = 24;
    let b = x + y === 0; 

    return (
        <div className="input">
            <textarea className="input">
            </textarea>
        </div>
    );
};