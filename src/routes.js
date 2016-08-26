import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignInVendor from './components/vendor/signin-vendor';
import SignUpVendor from './components/vendor/signup-vendor';
import SignInRenter from './components/renter/signin-renter';
import SignUpRenter from './components/renter/signup-renter';

import SearchBar from './components/renter/searchbar';
import BuyItem from './components/renter/buy-spot';
import SelectItem from './components/renter/spot-select';
import RenterHome from './components/renter/renter-home';
import Profile from './components/renter/profile';

// import Home from './components/home';
import SelectType from './components/shared/selectActType';
import StudentAuth from './components/shared/studentAuth';

import CreateSpots from './components/vendor/create-spots';
import SpotItem from './components/vendor/spot-list-item';

import Messaging from './components/shared/message-page';

import VendorManage from './components/vendor/manage';
import EditSpot from './components/vendor/edit-spot';
import VendorProfile from './components/vendor/profile';
import CreateCar from './components/renter/create-car';
import ViewCar from './components/renter/view-car';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={SelectType} />
    <Route path="/signup-renter" component={SignUpRenter} />
    <Route path="/signin-renter" component={SignInRenter} />
    <Route path="/signup-vendor" component={SignUpVendor} />
    <Route path="/signin-vendor" component={SignInVendor} />

    <Route path="/renter/search" component={SearchBar} />
    <Route path="/renter/select-spot" component={SelectItem} />
    <Route path="/renter/buy-spot" component={BuyItem} />
    <Route path="/renter/add-car" component={CreateCar} />
    <Route path="/renter/view-car" component={ViewCar} />
    <Route path="/renter" component={Profile} />

    <Route path="/vendor/manage" component={VendorManage} />
    <Route path="/vendor/create-spots" component={CreateSpots} />
    <Route path="/vendor/spot-list-item" component={SpotItem} />
    <Route path="/vendor/edit-spots" component={EditSpot} />
    <Route path="/vendor/profile" component={VendorProfile} />

    <Route path="/selectType" component={SelectType} />
    <Route path="/studentAuth" component={StudentAuth} />
    <Route path="/messaging" component={Messaging} />
  </Route>
);
