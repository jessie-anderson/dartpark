import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignIn from './components/shared/signin';
import SignUp from './components/shared/signup';
import Home from './components/home';
import SearchBar from './components/renter/searchbar';
import BuyItem from './components/renter/buy-spot';
import SelectItem from './components/renter/spot-select';
import SpotDetail from './components/renter/spot-detail';
import RenterHome from './components/renter/renter-home';
import Profile from './components/renter/profile';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/renter/profile" component={Profile} />
    <Route path="/renter/search" component={SearchBar} />
    <Route path="/renter/select-spot" component={SelectItem} />
    <Route path="/renter/spot-detail" component={SpotDetail} />
    <Route path="/renter/buy-spot" component={BuyItem} />
    <Route path="/renter" component={RenterHome} />
  </Route>
);
