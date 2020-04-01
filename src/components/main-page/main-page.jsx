import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator as OffersActionCreator} from "../../reducer/offers/offers.js";
import {PlacesListMainWrapped} from '../../hocs/withActiveCardSwitcher/with-active-card-switcher.jsx';
import Header from '../header/header.jsx';
import CityMap from '../city-map/city-map.jsx';
import CitiesNavigation from '../cities-navigation/cities-navigation.jsx';

const CityWithoutOffers = ({activeCityName}) => {
  return <div className="cities">
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          {(activeCityName !== ``) ? <p className="cities__status-description">We could not find any property availbale at the moment in {activeCityName}</p> : null}
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  </div>;
};

const CityWithOffers = ({cityLatLon, activeCityName, places, placesCoordinates, activePlaceCoordinates}) => {
  return <div className="cities">
    <div className="cities__places-container container">
      <PlacesListMainWrapped activeCityName={activeCityName} places={places} foundPlacesQnt={places.length}/>
      <div className="cities__right-section">
        <CityMap placesCoordinates={placesCoordinates} sectionLocationClass={`cities__map`} activePlaceCoordinates={activePlaceCoordinates} cityLatLon={cityLatLon}/>
      </div>
    </div>
  </div>;
};

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getPlacesCoordinates = (places) => places.map((place) => {
    return {lat: place.gps.lat, lon: place.gps.lon};
  });

  getCitiesTabsList = (data) => data.map((offer) => {
    return offer.city;
  });

  render() {
    const {places, allOffers, activeCityName, activeCityId, onCityTabClick} = this.props;

    return <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${(places.length === 0) ? `page__main--index-empty` : null}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesNavigation activeCityId={activeCityId} cities={this.getCitiesTabsList(allOffers)} onCityTabClick={onCityTabClick}/>
        {(places.length === 0)
          ? <CityWithoutOffers activeCityName={activeCityName}/>
          : <CityWithOffers cityLatLon={allOffers[activeCityId].cityLatLon} placesCoordinates={this.getPlacesCoordinates(places)} activeCityName={activeCityName} places={places} activePlaceCoordinates={this.props.activeCardLatLon}/>
        }
      </main>
    </div>;
  }
}

CityWithoutOffers.propTypes = {
  activeCityName: PropTypes.string.isRequired
};

CityWithOffers.propTypes = {
  activeCityName: PropTypes.string.isRequired,
  cityLatLon: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  }).isRequired,
  places: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        previewUrl: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        gps: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lon: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
  ).isRequired,
  placesCoordinates: PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired
      }).isRequired
  ),
  activePlaceCoordinates: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  }).isRequired
};

MainPage.propTypes = {
  activeCityName: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        previewUrl: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        gps: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lon: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
  ).isRequired,
  allOffers: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        cityLatLon: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lon: PropTypes.number.isRequired
        }).isRequired,
        places: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              price: PropTypes.number.isRequired,
              type: PropTypes.string.isRequired,
              rating: PropTypes.number.isRequired,
              previewUrl: PropTypes.string.isRequired,
              isPremium: PropTypes.bool.isRequired,
              gps: PropTypes.shape({
                lat: PropTypes.number.isRequired,
                lon: PropTypes.number.isRequired
              }).isRequired
            }).isRequired
        ).isRequired,
      }).isRequired
  ).isRequired,
  onCityTabClick: PropTypes.func.isRequired,
  activeCityId: PropTypes.number.isRequired,
  activeSortType: PropTypes.number.isRequired,
  activeCardLatLon: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  })
};

const mapStateToProps = (state) => {
  let {places, activeSortType} = state.offers;

  const sortPlaces = (sortType) => {
    let sortedPlaces = [];

    switch (sortType) {
      case 0:
        sortedPlaces = places;
        break;
      case 1:
        sortedPlaces = places.sort((a, b) => (a.price > b.price) ? 1 : -1);
        break;
      case 2:
        sortedPlaces = places.sort((a, b) => (a.price > b.price) ? -1 : 1);
        break;
      case 3:
        sortedPlaces = places.sort((a, b) => (a.rating > b.rating) ? -1 : 1);
        break;
      default:
        sortedPlaces = places;
        break;
    }

    return sortedPlaces;
  };

  places = sortPlaces(activeSortType);

  return {
    activeCityName: state.offers.activeCityName,
    activeCityId: state.offers.activeCityId,
    places,
    activeCardLatLon: state.offers.activeCardLatLon,
    activeSortType: state.offers.activeSortType,
    allOffers: state.offers.allOffers
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityTabClick(cityId) {
    dispatch(OffersActionCreator.changeCity(cityId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
