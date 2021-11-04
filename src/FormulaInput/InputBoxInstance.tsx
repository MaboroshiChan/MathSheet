import {myStore} from '../MathSheet/Store';
import { connect } from 'react-redux';
import { values } from 'fp-ts/lib/ReadonlyMap';

type InputBoxInstanceProps = {
    latex_code: string
}

const InputBoxInstance = (props: InputBoxInstanceProps) => {

    const dispatch = (value: string) => 
        myStore.dispatch({
            type: "REFRESH",
            value: value
    });

    const change = event=>{
        let value = event.target.value;
        dispatch(value);
    }

    return (
            <div className="input-div">
                <textarea 
                    className="input" 
                    onChange={event=>change(event)} value={props.latex_code}>
                </textarea>
            </div>
    );
};

function mapStateToProp(s: string): InputBoxInstanceProps{
    return {
        latex_code: s
    }
}

const ConnectedInputBoxInstance = connect(mapStateToProp)(InputBoxInstance);

export default ConnectedInputBoxInstance;