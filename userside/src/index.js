require('file-loader?name=[name].[ext]!./index.html')

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const root = document.getElementById("react-root");

ReactDOM.render(<App/>, root);

console.log("hello ")