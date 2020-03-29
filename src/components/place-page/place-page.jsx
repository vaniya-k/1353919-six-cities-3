import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import ReviewsList from '../reviews-list/reviews-list.jsx';
import YourReview from '../your-review/your-review.jsx'
import CityMap from '../city-map/city-map.jsx';
import {PlacesListNearbyWrapped} from '../../hocs/withActiveCardSwitcher/with-active-card-switcher.jsx';

const PlaceImage = ({imageUrl}) => {
  return <div className="property__image-wrapper">
    <img className="property__image" src={imageUrl}></img>
  </div>;
};

const PremiumMark = ({isPremium}) => {
  return isPremium ? <div className="property__mark"><span>Premium</span></div> : null;
};

const Commodity = ({item}) => {
  return <li className="property__inside-item">
    {`${item}`}
  </li>;
};

const PlacePage = ({title, price, isPremium, type, rating, gps, bedroomsQnt, guestsMaxQnt, images, commodities, description, host, reviews, onPlaceCardClick, placesNearby, placesNearbyCoordinates, activeCardLatLon, cityLatLon}) => {
  return <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((image, i) => <PlaceImage key={`key${i}`} imageUrl={image}/>)}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <PremiumMark isPremium={isPremium}/>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use href="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${Math.round(rating)}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating / 20}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedroomsQnt}
              </li>
              <li className="property__feature property__feature--adults">
                {guestsMaxQnt}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {commodities.map((item, i) => <Commodity key={`key${i}`} item={item}/>)}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={host.super ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={host.avaPicUrl} width="74" height="74" alt="Host avatar"></img>
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
              </div>
              <div className="property__description">
               <p className="property__text">
                {description}
              </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList reviews={reviews}/>
              <YourReview/>
            </section>
          </div>
        </div>
        <CityMap placesCoordinates={placesNearbyCoordinates} sectionLocationClass={`property__map`} placePageCoordinates={gps} activePlaceCoordinates={activeCardLatLon} cityLatLon={cityLatLon}/>
      </section>
      <div className="container">
        <PlacesListNearbyWrapped places={placesNearby.slice(0, 3)} onPlaceCardClick={onPlaceCardClick}/>
      </div>
    </main>
  </div>;
};

PlaceImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

PremiumMark.propTypes = {
  isPremium: PropTypes.bool.isRequired
};

Commodity.propTypes = {
  item: PropTypes.string.isRequired
};


PlacePage.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  gps: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  }).isRequired,
  bedroomsQnt: PropTypes.number.isRequired,
  guestsMaxQnt: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  commodities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.string.isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired,
    avaPicUrl: PropTypes.string.isRequired
  }).isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avaPicName: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  placesCoordinates: PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired
      }).isRequired
  ).isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  placesNearby: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        previewUrl: PropTypes.string.isRequired,
        gps: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lon: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
  ).isRequired,
  activeCardLatLon: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  })
};

const mapStateToProps = (state) => {
  const placeObj = state.offers.allOffersWithCompleteData[0];

  const placesNearby = [state.offers.allOffers[0].places[1],state.offers.allOffers[0].places[2],state.offers.allOffers[0].places[3]]
  
  const placesNearbyCoordinates = [{lat: placesNearby[0].gps.lat, lon: placesNearby[0].gps.lon}, {lat: placesNearby[1].gps.lat, lon: placesNearby[1].gps.lon}, {lat: placesNearby[2].gps.lat, lon: placesNearby[2].gps.lon}]

  return {
  placesNearby,
  placesNearbyCoordinates,
  cityLatLon: state.offers.allOffers[0].cityLatLon,
  activeCardLatLon: state.offers.activeCardLatLon,
  title: placeObj.title,
  price: placeObj.price,
  isPremium:placeObj.isPremium,
  type: placeObj.type,
  rating: placeObj.rating,
  gps: placeObj.gps,
  bedroomsQnt: placeObj.bedroomsQnt,
  guestsMaxQnt: placeObj.guestsMaxQnt,
  images: placeObj.images,
  commodities: placeObj.commodities,
  description: placeObj.description,
  host: placeObj.host,
  }
};

export default connect(mapStateToProps, null)(PlacePage);
