import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import {Provider as ReduxProvider} from 'react-redux';
import { store } from './state/store';

ReactDOM.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
    , document.getElementById('root')
);
