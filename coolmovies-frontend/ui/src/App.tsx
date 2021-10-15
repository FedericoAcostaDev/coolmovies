import React from 'react';
import GlobalStyles from './GlobalStyles';

import Navbar from './components/navbar';
import { BiMoviePlay } from 'react-icons/bi'
import Box from './components/box';
import MoviesList from './containers/movies_list';
import ReviewList from './containers/review_list';
import ReviewForm from './containers/review_form';

import { client } from './sevices/client';
import { ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'My Reviews', path: '/' },
    { name: 'Movies', path: '/' },
    { name: 'All Reviews', path: '/' }
  ]

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar items={navItems} Icon={BiMoviePlay} title="Coolmovies" />
        <Box />
        <GlobalStyles />
      </Router>
    </ApolloProvider>
  );
}

export default App;
