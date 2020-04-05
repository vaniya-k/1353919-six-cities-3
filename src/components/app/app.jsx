import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Header from '../header/header.jsx';
import MainPage from '../main-page/main-page.jsx';
import SignInPage from '../sign-in-page/sign-in-page.jsx';
import PlacePage from '../place-page/place-page.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import {Router, Route, Switch, Link} from 'react-router-dom';
import history from '../../history.js';

const GoAwayPage = () => {
  return <React.Fragment>
    <Header />
    <main>
      <h4 style={{textAlign: `center`}}>This page is not availble for unauthenticated users</h4>
    </main>
    <footer className="footer container">
      <Link className="footer__logo-link" to="/">
        <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
      </Link>
    </footer>
  </React.Fragment>;
};

const App = ({authorizationStatus}) => {
  return <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => {
        return <MainPage/>;
      }}
      />
      <Route path="/place/:routeId" render={() => {
        window.scrollTo(0, 0);

        return <PlacePage/>;
      }}
      />
      <Route exact path="/login" render={() => {
        return <SignInPage/>;
      }}
      />
      <Route exact path="/favorites"render={() => {
        if (authorizationStatus === `AUTH`) {
          return <FavoritesPage/>;
        } else {
          return <GoAwayPage/>;
        }
      }}
      />
    </Switch>
  </Router>;
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus
});

export default connect(mapStateToProps, null)(App);

