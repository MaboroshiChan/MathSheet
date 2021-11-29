import ActionType from "../Interfaces/Action";
import {Action} from 'redux';

export const reducer = (state, action: Action<ActionType>) => {
    switch(action.type.typeName){
        case "MODIFY":
            
            break;
        default:
            throw Error(`Unknown action type ${action.type.typeName}`);
    }
}