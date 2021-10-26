import React, { Component, Props } from 'react';
import { useAppDispatch } from '../MathSheet/Hooks';
import { useAppSelector } from '../MathSheet/Hooks';

export const InputBoxInstance = props => {

    let x = 12;
    let y = 24;
    let b = x + y === 0;

    const newTex = useAppSelector(s=>s);

    return (
        <div className="input">
            <textarea className="input">
            </textarea>
        </div>
    );
};