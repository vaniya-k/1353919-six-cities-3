import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesListNearby extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(cardId) {
    const value = (cardId === this.state.activeCardId) ? null : cardId;
    this.setState({activeCardId: value});
  }

  render() {
    const {places, onPlaceCardClick} = this.props;

    return <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map((place, i) => <PlaceCard key={`key${i}`} cardId={`key${i}`} place={place} handleHover={this.handleHover} onPlaceCardClick={onPlaceCardClick} articleLocationClass={`near-places`}/>)}
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
        imageName: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        gps: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lon: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
  ).isRequired,
  onPlaceCardClick: PropTypes.func.isRequired
};

export default PlacesListNearby;
