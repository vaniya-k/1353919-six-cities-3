import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import {withActiveCardSwitcher} from '../../hocs/withActiveCardSwitcher/with-active-card-switcher.jsx';

const PlacesListNearby = ({places, onPlaceCardClick, handleHover}) => {
  return <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {places.map((place, i) => <PlaceCard key={`key${i}`} cardId={`key${i}`} place={place} handleHover={handleHover} onPlaceCardClick={onPlaceCardClick} articleLocationClass={`near-places`}/>)}
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
        imageName: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        gps: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lon: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
  ).isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  handleHover: PropTypes.func.isRequired
};

export default withActiveCardSwitcher(PlacesListNearby);
