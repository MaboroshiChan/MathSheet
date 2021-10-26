import React, { Component, Props, useState } from 'react';
import { useAppDispatch } from '../MathSheet/Hooks';
import { useAppSelector } from '../MathSheet/Hooks';
import {myStore} from '../MathSheet/Store';

export const InputBoxInstance = props => {

    const newTex = useAppSelector(s=>s);

    const [tex, seTeX] = useState(newTex);

    const dispatch = useAppDispatch();

    return (
        <div className="input-div">
            <textarea className="input" onChange={event=>seTeX(event.target.value)}>
                {tex}
            </textarea>
        </div>
    );
};