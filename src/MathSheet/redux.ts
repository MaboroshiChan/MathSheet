import {createStoreHook, Provider, TypedUseSelectorHook} from 'react-redux';
import { refreshReducer } from '../FormulaInput/InputBoxInstance';
import {createStore} from 'redux';
import React from 'react';

const MathContext = React.createContext(null);

let usetore = createStoreHook(MathContext);

let myStore = createStore(refreshReducer);

