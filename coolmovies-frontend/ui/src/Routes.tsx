import Home from './pages/home';
import Reviews from './pages/reviews';
import Movies from './pages/movies';

import { getReviews, getMovieReviewsByUser } from './sevices/queries/movie_reviews';
import { listMovies } from './sevices/queries/movies';

import { useEffect } from 'react';
import { useCurrentUserContext } from './sevices/context/user_auth';

import {
  Switch,
  Route
} from "react-router-dom";

const Routes: Function = () => {
  const { fetchUser, currentUser } = useCurrentUserContext();

  useEffect(() => {
    fetchUser();
  }, [currentUser])

  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/all-movies" render={() => (<Movies gqlQuery={listMovies} />)}/>
      <Route path="/my-reviews" render={() => (<Reviews gqlQuery={getMovieReviewsByUser} params={{ id: currentUser?.id}} />)}/>
      <Route path="/all-reviews" render={() => (<Reviews gqlQuery={getReviews} />)}/>
    </Switch>
  );
}

export default Routes;
