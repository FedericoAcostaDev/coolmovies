import Home from './pages/home';
import Reviews from './pages/reviews';
import Movies from './pages/movies';

import { listMovies } from './sevices/queries/movies';
import { useCurrentUserContext } from './sevices/hooks/user_auth';
import { getReviews, getMovieReviewsByUser } from './sevices/queries/movie_reviews';

import {
  Switch,
  Route
} from "react-router-dom";

const Routes: Function = () => {
  const { currentUser } = useCurrentUserContext();

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
