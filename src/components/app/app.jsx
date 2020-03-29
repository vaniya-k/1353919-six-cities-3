import React from 'react';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import PlacePage from '../place-page/place-page.jsx';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../../history.js';
import reviews from '../../mocks/places-listing-original.js';

const App = () => {
  return <Router history={history}>
    <Switch>
      <Route exact path="/">
        <Main onPlaceCardClick={() => console.log(`onPlaceCardClick`)}/>
      </Route>
      <Route exact path="/dev-place-page">
        <PlacePage reviews={reviews} onPlaceCardClick={() => console.log(`onPlaceCardClick`)}/>
      </Route>
      <Route exact path="/login">
        <SignIn/>
      </Route>
    </Switch>
  </Router>;
}

export default App;
