import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import PlacesListSorting from '../places-list-sorting/places-list-sorting.jsx';

const PlacesListMain = (props) => {
  const {activeCityName, places, foundPlacesQuantity, onHover} = props;

  return <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{foundPlacesQuantity} places to stay in {activeCityName}</b>
    <PlacesListSorting/>
    <div className="cities__places-list places__list tabs__content">
      {places.map((place, i) => <PlaceCard key={`key${i}`} placeLatLon={{lat: place.gps.lat, lon: place.gps.lon}} place={place} onHover={onHover}/>)}
    </div>
  </section>;
};

PlacesListMain.propTypes = {
  activeCityName: PropTypes.string.isRequired,
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
  foundPlacesQuantity: PropTypes.number.isRequired,
  onHover: PropTypes.func.isRequired
};

export default PlacesListMain;
