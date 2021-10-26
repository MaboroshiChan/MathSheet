import {createStoreHook, Provider, TypedUseSelectorHook} from 'react-redux';
import { refreshReducer } from '../FormulaInput/InputBoxInstance';
import {createStore} from 'redux';
import React from 'react';
import configureStore from 'redux-toolkit';

const MathContext = React.createContext(null);

let usetore = createStoreHook(MathContext);

let myStore = createStore(refreshReducer);

const store = configureStore({
    reducer: {
        tex_code: refreshReducer
    }    
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

