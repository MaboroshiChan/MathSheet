import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MathSheet from "./MathSheet/MathSheet";
import { Provider } from 'react-redux';
import {createStore, Action} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ActionType from './Interfaces/Action';
import Equation from './Interfaces/Equation';

const store = createStore((s: Equation, action: Action<ActionType>)=>{
    switch(action.type.typeName){
      case "MODIFY":
        let new_data = action.type.value;
        let index = action.type.index;
        let message = s.messages[index];
        s.messages[index] = {
          solution: new_data,
          reason: message.reason,
          error: message.error
        };
        return s;
      default:
        throw Error(`Unknown action type ${action.type}`);
    }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MathSheet />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
