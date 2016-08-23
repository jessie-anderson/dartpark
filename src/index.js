import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import thunk from 'redux-thunk';
import { UserActionTypes } from './actions/user-actions';

import './style.scss';

import reducers from './reducers';

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const token = localStorage.getItem('token');
if (token) {
  console.log('has token loggin in RENTER');
  store.dispatch({ type: UserActionTypes.AUTH_RENTER }); // need user stuff
}

// entry point that just renders app
// could be used for routing at some point
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('main'));
