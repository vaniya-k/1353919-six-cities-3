import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import PlacePage from '../place-page/place-page.jsx';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../../history.js';
import reviews from '../../mocks/places-listing-original.js';

const App = ({getOffersNearby}) => {
  return <Router history={history}>
    <Switch>
      <Route exact path="/">
        <Main onPlaceCardClick={() => console.log(`onPlaceCardClick`)}/>
      </Route>
      <Route path="/place/:routeId" render={() =>
        {
          getOffersNearby();
          return <PlacePage reviews={reviews}/>
        }
      }/>
      <Route exact path="/login">
        <SignIn/>
      </Route>
    </Switch>
  </Router>;
}

App.propTypes = {
  getOffersNearby: PropTypes.func.isRequired
};

export default App;
