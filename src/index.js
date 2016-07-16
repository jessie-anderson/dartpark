import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import './style.scss';

// entry point that just renders app
// could be used for routing at some point
ReactDOM.render(<App />, document.getElementById('main'));
