import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import 'antd/dist/antd.css';
import "./static/css/ui.scss";
import reduxr from '@/store/reduxr'







let store = createStore(reduxr);
 store.subscribe(() =>{
        // console.log(store.getState())
 });
// console.log(store.getState());
// store.dispatch({ type: 'INCREMENT' });
// // 1
// store.dispatch({ type: 'INCREMENT' });


ReactDOM.render(
    <Provider store={store}>
        <Page  />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
