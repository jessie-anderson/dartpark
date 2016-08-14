import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignIn from './components/shared/signin';
import SignUp from './components/shared/signup';
// import Home from './components/home';
import SelectType from './components/shared/selectActType';
import StudentAuth from './components/shared/studentAuth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/selectType" component={SelectType} />
    <Route path="/studentAuth" component={StudentAuth} />
  </Route>
);
