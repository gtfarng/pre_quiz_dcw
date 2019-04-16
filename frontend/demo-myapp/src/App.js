import React, { Component } from 'react'
import './App.css'

import axios from 'axios'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import Bear from "./Component/bear"

export const getBearsSuccess = bears => ({
  type: 'GET_BEARS_SUCCESS',
  bears
});


export const getBearsFailed = () => ({ type: 'GET_BEARS_FAILED' });

export const getBears = () => async (dispatch) => {
  try {
    console.log('get bear new')
    const response = await axios.get(`http://localhost:8000/api/bears`)
    const responseBody = await response.data;
    console.log('response: ', responseBody)
    dispatch(getBearsSuccess(responseBody));
  } catch (error) {
    console.error(error);
    dispatch(getBearsFailed());
  }
}


export const bearReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_BEARS_SUCCESS':
      console.log('action: ', action.bears)
      return action.bears
    case 'GET_BEARS_FAILED':
      console.log('action: Failed')
      return action.bears
    default:
      return state
  }
}

const rootReducer = combineReducers({
  bears: bearReducer
})

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br />
          <h1>React-App-Myapp</h1>
          <br />
        </header>
        <br />
        <div>
          <h3>Render Component</h3>

          <Provider store={store}>
            <Bear />
          </Provider>
        </div>

        <header className="App-header">
          <br />
          <h3>Name : Mr.Jatupat Pannoi</h3>
          <h3>ID : 5735512002</h3>
          <h3>section : 02</h3>
          <br />
        </header>
      </div>
    );
  }
}
