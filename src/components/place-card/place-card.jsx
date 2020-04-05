import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Bookmark from '../bookmark/bookmark.jsx';

const PlaceCardInfo = ({place}) => {
  const {id, price, isFavorite, rating, title, type} = place;

  return <div className="place-card__info">
    <div className="place-card__price-wrapper">
      <div className="place-card__price">
        <b className="place-card__price-value">&euro;{price}</b>
        <span className="place-card__price-text">&#47;&nbsp;night</span>
      </div>
      <Bookmark id={id} isFavorite={isFavorite}/>
    </div>
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${rating}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
    <h2 className="place-card__name">
      <Link to={`/place/${id}`}>{title}</Link>
    </h2>
    <p className="place-card__type">{type}</p>
  </div>;
};

class PlaceCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  setActicleLocationClass = (page) => {
    if (page.includes(`place`)) {
      return `near-places__card place-card`;
    } else if (page.includes(`favorites`)) {
      return `favorites__card place-card`;
    } else {
      return `cities__place-card place-card`;
    }
  }

  setDivLocationClass = (page) => {
    if (page.includes(`place`)) {
      return `near-places__image-wrapper place-card__image-wrapper`;
    } else if (page.includes(`favorites`)) {
      return `favorites__image-wrapper place-card__image-wrapper`;
    } else {
      return `cities__image-wrapper place-card__image-wrapper`;
    }
  }

  render() {
    const {place, onHover, placeLatLon, page = `/`} = this.props;

    return <article className={this.setActicleLocationClass(page)} onMouseEnter={(onHover) ? () => onHover(placeLatLon) : null} onMouseLeave={(onHover) ? () => onHover({lat: null, lon: null}) : null}>
      {place.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className={this.setDivLocationClass(page)}>
        <a href="#">
          <img className="place-card__image" src={place.previewUrl} width={(page.includes(`favorites`)) ? `150` : `260`} height={(page.includes(`favorites`)) ? `200` : `110`} alt="Place image"></img>
        </a>
      </div>
      <PlaceCardInfo place={place}/>
    </article>;
  }
}

PlaceCardInfo.propTypes = {
  place: PropTypes.shape({
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
    }).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
};

PlaceCard.propTypes = {
  place: PropTypes.shape({
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
  }).isRequired,
  onHover: PropTypes.func,
  placeLatLon: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  }),
  page: PropTypes.string
};

export default PlaceCard;
