import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if(window.AJS){
    window.AJS.toInit(function () {
        console.log("Production optimized bundle initialization");
        ReactDOM.render(<App/>, document.getElementById('root'));
        registerServiceWorker();
    });
} else {
    console.log("Dev bundle initialization");
    ReactDOM.render(<App/>, document.getElementById('root'));
    registerServiceWorker();
}