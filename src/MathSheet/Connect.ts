export type MyAction<T> = {
    type: string,
    value: T
}


export const refreshReducer = (state: string, action: MyAction<string>)=>{
    switch(action.type){
        case "REFRESH":
            return action.value;
        default:
            throw Error(`Not recognized action type: ${action.type}`);
    }
}

export const refreshDispatcher = ()=>{};

