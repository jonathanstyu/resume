import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import App from './app.js'
import {resumeApp} from './reducer.js'
import {createStore, applyMiddleware} from "redux"
import createLogger from "redux-logger"

const loggerMiddleware = createLogger();
let store = createStore(resumeApp, applyMiddleware(loggerMiddleware))

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('container')
)
