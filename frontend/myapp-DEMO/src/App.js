import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'
import BearIndex from './components/bear_index'
import './App.css'

const createStoreWithMiddleware = applyMiddleware(promise,logger,thunk)(createStore);

class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            
        
            <BrowserRouter>
           

                <div>
                    <Switch>
                        <Route path="/" component={BearIndex} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
