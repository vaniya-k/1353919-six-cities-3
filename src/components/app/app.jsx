import React from 'react';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import PlacePage from '../place-page/place-page.jsx';
import Favorites from '../favorites/favorites.jsx';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../../history.js';
import reviews from '../../mocks/places-listing-original.js';

const App = () => {
  return <Router history={history}>
    <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route path="/place/:routeId" render={() => {
        window.scrollTo(0, 0);
        return <PlacePage reviews={reviews}/>;
      }
      }/>
      <Route exact path="/login">
        <SignIn/>
      </Route>
      <Route exact path="/favorites">
        <Favorites/>
      </Route>
    </Switch>
  </Router>;
};

export default App;
