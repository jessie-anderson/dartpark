import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignIn from './components/shared/signin';
import SignUp from './components/shared/signup';

import SearchBar from './components/renter/searchbar';
import BuyItem from './components/renter/buy-spot';
import SelectItem from './components/renter/spot-select';
import SpotDetail from './components/renter/spot-detail';
import RenterHome from './components/renter/renter-home';
import Profile from './components/renter/profile';

// import Home from './components/home';
import SelectType from './components/shared/selectActType';
import StudentAuth from './components/shared/studentAuth';

import CreateSpots from './components/vendor/create-spots';
import SpotItem from './components/vendor/spot-list-item';
import UploadPopUp from './components/vendor/upload-PopUp';
import VendorManage from './components/vendor/manage';

import EditSpot from './components/vendor/edit-spot';
import VendorProfile from './components/vendor/profile';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />

    <Route path="/renter/profile" component={Profile} />
    <Route path="/renter/search" component={SearchBar} />
    <Route path="/renter/select-spot" component={SelectItem} />
    <Route path="/renter/spot-detail" component={SpotDetail} />
    <Route path="/renter/buy-spot" component={BuyItem} />
    <Route path="/renter" component={RenterHome} />

    <Route path="/vendor/manage" component={VendorManage} />
    <Route path="/vendor/create-spots" component={CreateSpots} />
    <Route path="/vendor/spot-list-item" component={SpotItem} />
    <Route path="/vendor/upload-PopUp" component={Upload} />

    <Route path="/selectType" component={SelectType} />
    <Route path="/studentAuth" component={StudentAuth} />
  </Route>
);
