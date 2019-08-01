import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './logic/reducer'
import {Provider} from 'react-redux'
import rootSaga from "./logic/rootSaga";
import createSagaMidddelware from "redux-saga";


const sagaMiddelware = createSagaMidddelware();
const middleware = [sagaMiddelware];
const store = createStore(reducer, compose(
    applyMiddleware(...middleware),
));

sagaMiddelware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
