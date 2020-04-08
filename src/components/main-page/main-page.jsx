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
      <PlacesListMainWrapped activeCityName={activeCityName} places={places} foundPlacesQuantity={places.length}/>
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

  componentDidMount() {
    const {setActiveCardLatLon, activeCardLatLon} = this.props;

    if (activeCardLatLon.lat !== null) {
      setActiveCardLatLon({lat: null, lon: null});
    }
  }

  sortTypeBuffer = null;

  cityIdBuffer = null;

  placesBuffer = [];

  favsQuantity = 0;

  getPlacesToRender = () => {
    const {places, activeCityId, activeSortType} = this.props;

    const currentFavsQuantity = places.filter((place) => place.isFavorite === true).length;

    if (activeSortType !== this.sortTypeBuffer || activeCityId !== this.cityIdBuffer || currentFavsQuantity !== this.favsQuantity) {
      this.sortTypeBuffer = activeSortType;

      this.cityIdBuffer = activeCityId;

      this.placesBuffer = places;

      this.favsQuantity = currentFavsQuantity;
    }

    let placesToReturn = this.placesBuffer;

    return placesToReturn;
  }

  getPlacesCoordinates = (places) => places.map((place) => {
    return {lat: place.gps.lat, lon: place.gps.lon};
  });

  getCitiesTabsList = (alllOffers) => alllOffers.map((cityObj) => {
    return cityObj.city;
  });

  render() {
    const {allOffers, activeCityName, activeCityId, onCityTabClick, activeCardLatLon} = this.props;

    const placesToRender = this.getPlacesToRender();

    return <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${(placesToRender.length === 0) ? `page__main--index-empty` : null}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesNavigation activeCityId={activeCityId} cities={this.getCitiesTabsList(allOffers)} onCityTabClick={onCityTabClick}/>
        {(placesToRender.length === 0)
          ? <CityWithoutOffers activeCityName={activeCityName}/>
          : <CityWithOffers cityLatLon={allOffers[activeCityId].cityLatLon} placesCoordinates={this.getPlacesCoordinates(placesToRender)} activeCityName={activeCityName} places={placesToRender} activePlaceCoordinates={activeCardLatLon}/>
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
        id: PropTypes.number.isRequired,
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
        id: PropTypes.number.isRequired,
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
  allOffers: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        cityLatLon: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lon: PropTypes.number.isRequired
        }).isRequired,
        places: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
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
      }).isRequired
  ).isRequired,
  onCityTabClick: PropTypes.func.isRequired,
  activeCityId: PropTypes.number.isRequired,
  activeSortType: PropTypes.number.isRequired,
  setActiveCardLatLon: PropTypes.func.isRequired,
  activeCardLatLon: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  })
};

const mapStateToProps = (state) => {
  const {places, activeSortType} = state.offers;

  let sortedPlaces = [];

  if (places) {
    sortedPlaces = places;
  }

  const buildPlacesListing = (sortType) => {
    switch (sortType) {
      case 0:
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
        break;
    }
  };

  buildPlacesListing(activeSortType);

  return {
    activeCityName: state.offers.activeCityName,
    activeCityId: state.offers.activeCityId,
    places: sortedPlaces,
    activeCardLatLon: state.offers.activeCardLatLon,
    activeSortType: state.offers.activeSortType,
    allOffers: state.offers.allOffers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityTabClick(cityId) {
    dispatch(OffersActionCreator.changeCity(cityId));
  },
  setActiveCardLatLon(activeCardLatLon) {
    dispatch(OffersActionCreator.setActiveCardLatLon(activeCardLatLon));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
