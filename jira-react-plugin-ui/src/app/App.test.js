import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from '../rootReducer';
import App from './App';

const store = createStore(
    rootReducer
);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
