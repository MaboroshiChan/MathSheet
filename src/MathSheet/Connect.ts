import {createStoreHook} from 'react-redux';
import {createStore} from 'redux';
import React from 'react';
import {configureStore} from '@reduxjs/toolkit';


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