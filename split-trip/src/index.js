import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './store/reducers/index'
import App from './App'
import './styles/index.sass'
import 'bootstrap/dist/css/bootstrap.min.css'

const devTool = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer, devTool(applyMiddleware(thunk, logger)))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root')
)