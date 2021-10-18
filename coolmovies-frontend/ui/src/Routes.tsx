import Home from './pages/home';
import Reviews from './pages/reviews';

import { CurrentUserProvider } from './sevices/context/user_auth';
import { getReviews, getMovieReviewsByUser } from './sevices/queries/movie_reviews';

import {
  Switch,
  Route
} from "react-router-dom";

const Routes: Function = () => {
  return (
    <CurrentUserProvider>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/my-reviews" render={() => (
            <Reviews gqlQuery={getMovieReviewsByUser} params={{ id: "65549e6a-2389-42c5-909a-4475fdbb3e69"}} />
          )}
        />
        <Route path="/all-reviews" render={() => (<Reviews gqlQuery={getReviews} />)} />
      </Switch>
    </CurrentUserProvider>
  );
}

export default Routes;
