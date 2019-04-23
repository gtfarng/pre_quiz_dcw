import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import promise from 'redux-promise'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'

import Count from './Count'
//import reducers from './reducers'
import CountsReducer from './reducers/reducer_counts';

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore)
//const createStoreWithMiddleware = applyMiddleware(promise,logger,thunk)(createStore)
//<Provider store={createStoreWithMiddleware(reducers)}>

export const rootReducer = combineReducers({counts: CountsReducer});
export const store = createStore(rootReducer, applyMiddleware(promise,logger,thunk))

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
              <div>
                <Switch>
                    <Route path="/" component={Count} />
                </Switch>
              </div>
            </BrowserRouter>
        </Provider>
    );
  }
}


