import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const defaultState = {
  logIn : true,
  books : []
}

const reducer = (state = defaultState , action)=>{
  switch(action.type){
    case "SHOW_LOGIN_STATE" :
      return {...state  , logIn : true}
    case "SHOW_SIGNIN_STATE" :
       return {...state  , logIn : false}
    default : 
     return state
  }
}

const store = createStore(reducer )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
