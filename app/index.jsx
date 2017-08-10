import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import App from './components/App'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

var store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
document.getElementById('app'));
