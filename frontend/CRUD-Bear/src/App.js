import React, { Component } from 'react';
import './App.css';
import Bear from "./Bear"
import CRUDBear from './crudBear'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore,  applyMiddleware } from 'redux'
//combineReducers,
import thunk from 'redux-thunk'
import logo from './panda.svg'
import rootReducer from './reducers'

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        </head>
        <img src={logo} alt="logo" />
        <CRUDBear />
        <Bear />
      </Provider>
    );
  }
}

export default App;