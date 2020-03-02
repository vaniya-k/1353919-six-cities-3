import React from 'react';
import Main from '../main/main.jsx';
import PlacePage from '../place-page/place-page.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {currentUrl: `/`};
  }

  render() {
    const {placesListing, placePageData} = this.props;

    const placesCoordinates = placesListing.places.map((place) => {
      return {lat: place.gps.lat, lon: place.gps.lon};
    });

    if (this.state.currentUrl === `/dev-place-page`) {
      return <PlacePage placePageData={placePageData} places={placesListing.places} placesCoordinates={placesCoordinates} onPlaceCardClick={() => this.setState({currentUrl: `/dev-place-page`})}/>;
    } else {
      return <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main foundPlacesQnt={placesListing.foundPlacesQnt} places={placesListing.places} placesCoordinates={placesCoordinates} onPlaceCardClick={() => this.setState({currentUrl: `/dev-place-page`})}/>
          </Route>
          <Route exact path="/dev-place-page">
            <PlacePage placePageData={placePageData} places={placesListing.places} placesCoordinates={placesCoordinates} onPlaceCardClick={() => this.setState({currentUrl: `/dev-place-page`})}/>
          </Route>
        </Switch>
      </BrowserRouter>;
    }
  }
}

App.propTypes = {
  placesListing: PropTypes.shape({
    places: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          imageName: PropTypes.string.isRequired,
          isPremium: PropTypes.bool.isRequired,
          gps: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lon: PropTypes.number.isRequired
          }).isRequired
        }).isRequired
    ).isRequired,
    foundPlacesQnt: PropTypes.number.isRequired,
  }).isRequired,
  placePageData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    gps: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired
    }).isRequired,
    bedroomsQnt: PropTypes.number.isRequired,
    guestsMaxQnt: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    commodities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
      avaPicName: PropTypes.string.isRequired
    }).isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          avaPicName: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
  }).isRequired
};

export default App;
