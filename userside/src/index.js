require('file-loader?name=[name].[ext]!./index.html')

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compse } from "redux";
import thunk from "redux-thunk"; 
import reducers from "./reducers";


const store = createStroe(reducers, compose(applyMiddleware(thunk)));

const root = document.getElementById("react-root");

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, root);