export type MyAction<T> = {
    type: string,
    value: T
}


export const refreshReducer = (state: string, action: MyAction<string>)=>{
    switch(action.type){
        case "REFRESH":
            return action.value
    }
}