import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import App from './app.js'
import {resumeApp} from './reducer.js'
import {createStore, applyMiddleware} from "redux"
import createLogger from "redux-logger" 
// import {Typography} from 'typography'
// import doelgerTheme from 'typography-theme-doelger'

const loggerMiddleware = createLogger();
let store = createStore(resumeApp, applyMiddleware(loggerMiddleware))
// const typography = new Typography(doelgerTheme);
// typography.injectStyles();

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('container')
)
