import React from 'react';
import PropTypes from 'prop-types';
import PlaceCardInfo from '../place-card-info/place-card-info.jsx';

class PlaceCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {place, onPlaceCardClick, handleHover, cardId, articleLocationClass} = this.props;

    return <article className={`${(articleLocationClass) === `cities` ? `cities__place-card` : `near-places__card`} place-card`} onMouseEnter={() => handleHover(cardId)} onMouseLeave={() => handleHover(cardId)}>
      {place.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className={`${articleLocationClass}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={`img/${place.imageName}.jpg`} width="260" height="200" alt="Place image"></img>
        </a>
      </div>
      <PlaceCardInfo place={place} onPlaceCardClick={onPlaceCardClick}/>
    </article>;
  }
}

PlaceCard.propTypes = {
  place: PropTypes.shape({
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
  }).isRequired,
  handleHover: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  articleLocationClass: PropTypes.string.isRequired
};

export default PlaceCard;
