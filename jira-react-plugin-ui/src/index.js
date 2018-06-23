import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./rootReducer";


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), /* eslint-disable-line  */
);

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App store={store}/>
        </Provider>,
        document.getElementById('root'), /* eslint-disable-line  */
    );
    registerServiceWorker();
};


if (window.AJS) {
    window.AJS.toInit(() => {
        console.log("Production optimized bundle initialization");
        renderApp();
    });
} else {
    console.log("Dev bundle initialization");
    renderApp();
}


