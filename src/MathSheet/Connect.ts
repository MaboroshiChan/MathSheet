export type MyAction<T> = {
    type: string
    value: T
}

export type UpdateType = {
    _latex_code: string,
    _id: number
  }

export const refreshReducer = (state: UpdateType, action: MyAction<string>): UpdateType => {
    if(state === undefined){
        return {
            _latex_code: "",
            _id: -1
        };
    }
    switch(action.type){
        case "REFRESH":
            return {
                _latex_code: action.value,
                _id: state._id
            };
        case "CREATION":
            return {
                _latex_code: state._latex_code,
                _id: state._id + 1
            }
        default:
            throw Error(`Not recognized action type: ${action.type} and state: ${state}`);
    }
}

export const refreshDispatcher = ()=>{};

