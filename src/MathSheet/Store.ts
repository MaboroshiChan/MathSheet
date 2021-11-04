import {createStoreHook} from 'react-redux';
import {createStore} from 'redux';
import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {refreshReducer, MyAction, UpdateType} from './Connect';

const MathContext = React.createContext(null);

export const useStore = createStoreHook(MathContext);

export let myStore = createStore<UpdateType, MyAction<string>, unknown, unknown>(refreshReducer);

export let store = configureStore({
    reducer: refreshReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof refreshReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch