import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers/index.js';
import './index.css';

import App from './App';

let composeEnhance = compose( applyMiddleware(thunk) );

const store = createStore(reducers, composeEnhance);

const container = document.getElementById('root')
const root = createRoot(container);
root.render (
    <Provider store={ store }>
        <App />
    </Provider>
);