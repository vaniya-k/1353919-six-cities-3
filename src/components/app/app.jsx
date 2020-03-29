import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import PlacePage from '../place-page/place-page.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ApiManager as UserApiManager} from '../../reducer/user/user.js';
import reviews from '../../mocks/places-listing-original.js';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {currentUrl: `/dev-main`};
    this.goBackToMain = this.goBackToMain.bind(this);
  }

  goBackToMain = () => {
    this.setState({currentUrl: `/dev-main-back-from-sign-in`});
  };

  render() {
    const {login} = this.props;

    if (this.state.currentUrl === `/dev-main-back-from-sign-in`) {
      return <Main onPlaceCardClick={() => this.setState({currentUrl: `/dev-place-page`})}/>;
    } else {
      return <BrowserRouter>
        <Switch>
          <Route exact path="/dev-main">
            <Main onPlaceCardClick={() => this.setState({currentUrl: `/dev-place-page`})}/>
          </Route>
          <Route exact path="/dev-place-page">
            <PlacePage reviews={reviews} onPlaceCardClick={() => this.setState({currentUrl: `/dev-place-page`})}/>
          </Route>
          <Route exact path="/dev-sign-in">
            <SignIn onSubmitLogin={login} onSubmitGoBack={this.goBackToMain}/>
          </Route>
        </Switch>
      </BrowserRouter>;
    }
  }
}

App.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserApiManager.login(authData));
  }
});

export {App};
export default connect(null, mapDispatchToProps)(App);
