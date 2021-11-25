export type MyAction<T> = {
    type: string
    value: T
}

export type UpdateType = {
    _latex_code: string
  }
/**
 * The reducer function for Redux store. 
 * @param state The state stored the necessary values for LateXBox
 * @param action Defining varieties of actions.
 * @returns new state
 */
export const refreshReducer = (state: UpdateType, action: MyAction<string>): UpdateType => {
    return {
        _latex_code: state._latex_code
    }
}

