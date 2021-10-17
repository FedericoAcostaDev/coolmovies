import React from 'react';
import GlobalStyles from './GlobalStyles';

import Routes from './Routes';
import { client } from './sevices/client';
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from './components/navbar';
import { BiMoviePlay } from 'react-icons/bi'

const App: React.FC = () => {

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/' },
    { name: 'My Reviews', path: '/my-reviews' },
    { name: 'About', path: '/' }
  ];

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar items={navItems} title="Coolmovies" Icon={BiMoviePlay} />
        <Routes />
      </Router>
      <GlobalStyles />
    </ApolloProvider>
  );
}

export default App;
