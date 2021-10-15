import React, { Component } from 'react';
import GlobalStyles from './GlobalStyles';

import Box from './components/box';
import Card from './components/card';
import MoviesList from './containers/movies_list';
import ReviewList from './containers/review_list';
import ReviewForm from './containers/review_form';

import Home from './pages/home';

import {
  Switch,
  Route
} from "react-router-dom";

const Routes: Function = () => {
  return (
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  );
}

export default Routes;
