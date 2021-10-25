import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MathSheet from "./MathSheet/MathSheet";
import InputBoxInstance from "./FormulaInput/InputBoxInstance";
import Provider, { createStoreHook, connect} from 'react-redux';
import {refreshReducer} from './FormulaInput/InputBoxInstance';


ReactDOM.render(
  <React.StrictMode>
    <MathSheet>
    </MathSheet>
    <InputBoxInstance/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
