import Home from './pages/home';
import Reviews from './pages/reviews';

import {
  Switch,
  Route
} from "react-router-dom";

const Routes: Function = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/my-reviews" render={() => (
          <Reviews />
        )}
        />
    </Switch>
  );
}

export default Routes;
