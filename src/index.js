import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import {Provider as ReduxProvider} from 'react-redux';
import { store } from './state/store';
import Script from 'react-load-script'

ReactDOM.render(
    <ReduxProvider store={store}>
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtDfUicswx55w6oJ8GuW3lqa3I-YBJXVU&libraries=places" />
        <App />
    </ReduxProvider>
    , document.getElementById('root')
);
