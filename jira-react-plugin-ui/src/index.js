/* eslint-disable no-undef,no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App store={store} />
        </Provider>,
        document.getElementById('root'),
    );
    registerServiceWorker();
};


if (window.AJS) {
    window.AJS.toInit(() => {
        console.log('Production optimized bundle initialization');
        renderApp();
    });
} else {
    console.log('Dev bundle initialization');
    renderApp();
}
