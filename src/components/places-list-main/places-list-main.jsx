import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator as OffersActionCreator} from "../../reducer/offers/offers.js";
import PlaceCard from '../place-card/place-card.jsx';
import PlacesListSortingWrapped from '../../hocs/withDropdownStatusSwitcher/with-dropdown-status-switcher.jsx';

class PlacesListMain extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.activeSortType !== nextProps.activeSortType || this.props.activeCityId !== nextProps.activeCityId || this.props.favsQuantity !== nextProps.favsQuantity) {
      if (this.props.activeCityId !== nextProps.activeCityId) {
        this.myRef.current.scrollIntoView();
      }

      return true;
    } else {
      return false;
    }
  }

  handleCardHover = (placeLatLon) => {
    const value = (placeLatLon === this.props.activeCardLatLon) ? {lat: null, lon: null} : placeLatLon;
    this.props.setActiveCardLatLon(value);
  }

  render() {
    const {activeCityName, places} = this.props;

    return <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found" ref={this.myRef}>{places.length} places to stay in {activeCityName}</b>
      <PlacesListSortingWrapped/>
      <div className="cities__places-list places__list tabs__content">
        {places.map((place, i) => <PlaceCard key={`key${i}`} placeLatLon={{lat: place.gps.lat, lon: place.gps.lon}} place={place} onHover={this.handleCardHover}/>)}
      </div>
    </section>;
  }
}

PlacesListMain.propTypes = {
  activeCityName: PropTypes.string.isRequired,
  activeCityId: PropTypes.number.isRequired,
  activeSortType: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        previewUrl: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        gps: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lon: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
  ).isRequired,
  activeCardLatLon: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  favsQuantity: PropTypes.number.isRequired,
  setActiveCardLatLon: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const {places, allOffers, activeCityId, activeSortType} = state.offers;

  const activeCityName = allOffers[activeCityId].city;

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

  const favsQuantity = sortedPlaces.filter((place) => place.isFavorite === true).length;

  return {
    allOffers: state.offers.allOffers,
    activeCityId: state.offers.activeCityId,
    activeCityName,
    activeSortType,
    places: sortedPlaces,
    activeCardLatLon: state.offers.activeCardLatLon,
    favsQuantity
  };
};

const mapDispatchToProps = (dispatch) => ({
  setActiveCardLatLon(activeCardLatLon) {
    dispatch(OffersActionCreator.setActiveCardLatLon(activeCardLatLon));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesListMain);
