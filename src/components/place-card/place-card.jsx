import React from 'react';
import PropTypes from 'prop-types';

const PremiumMark = ({isPremium}) => {
  return isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;
};

class PlaceCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {place, onPlaceCardClick, handleHover, cardId} = this.props;

    return <article className="cities__place-card place-card" onMouseEnter={() => handleHover(cardId)} onMouseLeave={() => handleHover(cardId)}>
      <PremiumMark isPremium={place.isPremium}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${place.imageName}.jpg`} width="260" height="200" alt="Place image"></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${place.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/dev-place-page" onClick={() => onPlaceCardClick()}>{place.title}</a>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
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
    isPremium: PropTypes.bool.isRequired
  })
  .isRequired,
  handleHover: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired
};

PremiumMark.propTypes = {
  isPremium: PropTypes.bool.isRequired
};

export default PlaceCard;
