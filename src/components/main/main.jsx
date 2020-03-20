import React from 'react';
import PropTypes from 'prop-types';
import offers from '../../mocks/cities-with-places.js';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {PlacesListMainWrapped} from '../../hocs/withActiveCardSwitcher/with-active-card-switcher.jsx';
import CityMap from '../city-map/city-map.jsx';
import CitiesNavigation from '../cities-navigation/cities-navigation.jsx';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getPlacesCoordinates = this.getPlacesCoordinates.bind(this);
    this.getCitiesTabsList = this.getCitiesTabsList.bind(this);
  }

  getPlacesCoordinates = (places) => places.map((place) => {
    return {lat: place.gps.lat, lon: place.gps.lon};
  });

  getCitiesTabsList = (data) => data.map((offer) => {
    return offer.city;
  });

  render() {
    const {places, placesLowToHigh, placesHighToLow, placesTopRating, activeSortType, activeCityName, activeCityId, onCityTabClick, onPlaceCardClick} = this.props;

    const sortPlaces = (sortType) => {
      let sortedPlaces = [...places];
      switch (sortType) {
        case 0:
          break;
        case 1:
          sortedPlaces = placesLowToHigh;
          break;
        case 2:
          sortedPlaces = placesHighToLow;
          break;
        case 3:
          sortedPlaces = placesTopRating;
          break;
      }
      return sortedPlaces;
    };

    return <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesNavigation activeCityId={activeCityId} cities={this.getCitiesTabsList(offers)} onCityTabClick={onCityTabClick}/>
        <div className="cities">
          <div className="cities__places-container container">
            <PlacesListMainWrapped activeCityName={activeCityName} places={sortPlaces(activeSortType)} foundPlacesQnt={places.length} onPlaceCardClick={onPlaceCardClick}/>
            <div className="cities__right-section">
              <CityMap placesCoordinates={this.getPlacesCoordinates(places)} sectionLocationClass={`cities__map`} activePlaceCoordinates={this.props.activeCardLatLon}/>
            </div>
          </div>
        </div>
      </main>
    </div>;
  }
}

Main.propTypes = {
  activeCityName: PropTypes.string.isRequired,
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
  placesLowToHigh: PropTypes.arrayOf(
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
  placesHighToLow: PropTypes.arrayOf(
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
  placesTopRating: PropTypes.arrayOf(
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
  onCityTabClick: PropTypes.func.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  activeCityId: PropTypes.number.isRequired,
  activeSortType: PropTypes.number.isRequired,
  activeCardLatLon: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  })
};

const mapStateToProps = (state) => ({
  activeCityName: state.activeCityName,
  activeCityId: state.activeCityId,
  places: state.places,
  placesLowToHigh: [...state.places].sort((a, b) => (a.price > b.price) ? 1 : -1),
  placesHighToLow: [...state.places].sort((a, b) => (a.price > b.price) ? -1 : 1),
  placesTopRating: [...state.places].sort((a, b) => (a.rating > b.rating) ? -1 : 1),
  activeCardLatLon: state.activeCardLatLon,
  activeSortType: state.activeSortType
});

const mapDispatchToProps = (dispatch) => ({
  onCityTabClick(cityId) {
    dispatch(ActionCreator.changeCity(cityId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
