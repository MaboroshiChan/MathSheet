import {useState } from 'react';
import { useAppDispatch } from '../MathSheet/Hooks';
import { useAppSelector } from '../MathSheet/Hooks';
import {myStore} from '../MathSheet/Store';

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

    return (
        <div className="input-div">
            <textarea className="input" onChange={event=>change(event)}>
                {tex}
            </textarea>
        </div>
    );
};