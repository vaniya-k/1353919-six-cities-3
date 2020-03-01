import React from 'react';
import PropTypes from 'prop-types';
import offers from '../../mocks/cities-with-places.js';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PlacesListMain from '../places-list-main/places-list-main.jsx';
import CityMap from '../city-map/city-map.jsx';
import CitiesNavigation from '../cities-navigation/cities-navigation.jsx';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.placesCoordinates = this.placesCoordinates.bind(this);
    this.citiesTabsList = this.citiesTabsList.bind(this);
  }

  placesCoordinates = (places) => places.map((place) => {
    return {lat: place.gps.lat, lon: place.gps.lon};
  });

  citiesTabsList = (offers) => offers.map((offer) => {
    return offer.city;
  })

  render() {
    const {places, onCityTabClick, onPlaceCardClick} = this.props;

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
        <CitiesNavigation cities={this.citiesTabsList(offers)} onCityTabClick={onCityTabClick}/>
        <div className="cities">
          <div className="cities__places-container container">
            <PlacesListMain places={places} foundPlacesQnt={places.length} onPlaceCardClick={onPlaceCardClick}/>
            <div className="cities__right-section">
              <CityMap placesCoordinates={this.placesCoordinates(places)} sectionLocationClass={`cities__map`}/>
            </div>
          </div>
        </div>
      </main>
    </div>;
  }
}

Main.propTypes = {
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
  onCityTabClick: PropTypes.func,
  onPlaceCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  places: state.places,
});

const mapDispatchToProps = (dispatch) => ({
  onCityTabClick(cityId) {
    dispatch(ActionCreator.changeCity(cityId));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
