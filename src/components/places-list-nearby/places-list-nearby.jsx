import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlacesListNearby = ({places, handleHover}) => {
  return <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {places.map((place, i) => <PlaceCard key={`key${i}`} placeLatLon={{lat: place.gps.lat, lon: place.gps.lon}} place={place} handleHover={handleHover} articleLocationClass={`near-places`}/>)}
    </div>
  </section>;
};

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
  handleHover: PropTypes.func.isRequired
};

export default PlacesListNearby;

