export type MyAction<T> = {
    type: string,
    value: T
}


export const refreshReducer = (state: string, action: MyAction<string>): string => {
    if(state === undefined){
        return "";
    }
    switch(action.type){
        case "REFRESH":
            return action.value;
        default:
            throw Error(`Not recognized action type: ${action.type} and state: ${state}`);
    }
}

export const refreshDispatcher = ()=>{};

