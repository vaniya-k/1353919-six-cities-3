import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/offers/offers.js";
import PlaceCard from '../place-card/place-card.jsx';

class PlacesListNearby extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleCardHover = (placeLatLon) => {
    const value = (placeLatLon === this.props.activeCardLatLon) ? {lat: null, lon: null} : placeLatLon;
    this.props.setActiveCardLatLon(value);
  }

  render() {
    const {places} = this.props;

    return <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map((place, i) => <PlaceCard key={`key${i}`} placeLatLon={{lat: place.gps.lat, lon: place.gps.lon}} place={place} onHover={this.handleCardHover} page={`place`}/>)}
      </div>
    </section>;
  }
}

PlacesListNearby.propTypes = {
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
  setActiveCardLatLon: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeCardLatLon: state.offers.activeCardLatLon
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCardLatLon(placeLatLon) {
    dispatch(ActionCreator.setActiveCardLatLon(placeLatLon));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesListNearby);
