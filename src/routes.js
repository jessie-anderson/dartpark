import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignIn from './components/shared/signin';
import SignUp from './components/shared/signup';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={SignIn} />
    <Route path="signup" component={SignUp} />
  </Route>
);
