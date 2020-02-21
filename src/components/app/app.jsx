import React from 'react';
import Main from '../main/main.jsx';
import PlacePage from '../place-page/place-page.jsx';
import PropTypes from 'prop-types';
import placesExpanded from '../../mocks/places-expanded.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {currentUrl: `/`};
    this.onPlaceCardClick = this.onPlaceCardClick.bind(this);
  }

  onPlaceCardClick = () => {
    this.setState({currentUrl: `/dev-place-page`});
  };

  render () {
    const {foundPlacesQnt, places} = this.props;

    if (this.state.currentUrl === `/dev-place-page`) {
      return <PlacePage placePageObj={placesExpanded[0]}/>;
    }
    else {
      return <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main foundPlacesQnt={foundPlacesQnt} places={places} onPlaceCardClick={this.onPlaceCardClick}/>
          </Route>
          <Route exact path="/dev-place-page">
            <PlacePage placePageObj={placesExpanded[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    }
  }
}

App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
      })).
  isRequired,
  foundPlacesQnt: PropTypes.number.isRequired
};

export default App;
