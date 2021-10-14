import React from 'react';
import MoviesList from './containers/movies_list';
import ReviewForm from './containers/review_form';

import { client } from './sevices/client';
import { ApolloProvider } from "@apollo/client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <MoviesList />
      <ReviewForm />
    </ApolloProvider>
  );
}

export default App;
