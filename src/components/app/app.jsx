import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import SignInPage from '../sign-in-page/sign-in-page.jsx';
import PlacePage from '../place-page/place-page.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../../history.js';
import reviews from '../../mocks/places-listing-original.js';

const App = () => {
  return <Router history={history}>
    <Switch>
      <Route exact path="/">
        <MainPage/>
      </Route>
      <Route path="/place/:routeId"
        render={() => {
          window.scrollTo(0, 0);
          return <PlacePage reviews={reviews}/>
        }}
      />
      <Route exact path="/login">
        <SignInPage/>
      </Route>
      <Route exact path="/favorites">
        <FavoritesPage/>
      </Route>
    </Switch>
  </Router>;
};

export default App;
