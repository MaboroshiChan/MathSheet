import React from 'react';
import {useState } from 'react';
import { useAppDispatch } from '../MathSheet/Hooks';
import { useAppSelector } from '../MathSheet/Hooks';
import {myStore} from '../MathSheet/Store';
import { Provider } from 'react-redux';

export const InputBoxInstance = props => {

    const newTex = useAppSelector(s=>s);

    const [tex, seTeX] = useState(newTex);

    const dispatch = (value: string) => myStore.dispatch({
        type: "REFRESH",
        value: value
    });

    const change = event=>{
        let value = event.target.value;
        seTeX(value);
        dispatch(value);
    }

    const MathContext = React.createContext(null);

    return (
        <Provider context={MathContext} store={myStore}>
            <div className="input-div">
                <textarea className="input" onChange={event=>change(event)}>
                    {tex}
                </textarea>
            </div>
        </Provider>
    );
};