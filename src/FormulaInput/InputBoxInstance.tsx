import React, { Component, Props } from 'react';
import InputBox from "./InputBox";
import { refreshReducer} from '../MathSheet/store';
import { useAppDispatch } from '../MathSheet/Hooks';
import { useAppSelector } from '../MathSheet/Hooks';

export const InputBoxInstance = props => {

    let x = 12;
    let y = 24;
    let b = x + y === 0;

    const newTex = useAppSelector(state=>state.split(""));

    return (
        <div className="input">
            <textarea className="input">
            </textarea>
        </div>
    );
};