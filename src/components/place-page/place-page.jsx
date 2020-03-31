import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ApiManager as OffersApiManager, ActionCreator as OffersActionCreator} from "../../reducer/offers/offers.js";
import ReviewsList from '../reviews-list/reviews-list.jsx';
import YourReview from '../your-review/your-review.jsx';
import CityMap from '../city-map/city-map.jsx';
import Header from '../header/header.jsx';
import {PlacesListNearbyWrapped} from '../../hocs/withActiveCardSwitcher/with-active-card-switcher.jsx';
import history from '../../history.js';

const PlaceImage = ({imageUrl}) => {
  return <div className="property__image-wrapper">
    <img className="property__image" src={imageUrl}></img>
  </div>;
};

const Commodity = ({item}) => {
  return <li className="property__inside-item">
    {`${item}`}
  </li>;
};

class PlacePage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getOffersNearby, setActivePlacePageId, id} = this.props;

    getOffersNearby();
    setActivePlacePageId(id);
  }

  componentDidUpdate() {
    const {getOffersNearby, setActivePlacePageId, id, activePlacePageId} = this.props;

    if (activePlacePageId !== id) {
      getOffersNearby();
      setActivePlacePageId(id);
    }
  }

  render() {
    const {title, price, isPremium, isFavorite, type, rating, gps, bedroomsQnt, guestsMaxQnt, images, commodities, description, host, reviews, activePlacePageId, id, placesNearby, placesNearbyCoordinates, activeCardLatLon, cityLatLon} = this.props;

    return <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => <PlaceImage key={`key${i}`} imageUrl={image}/>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
            {(isPremium)
            ? <div className="property__mark">
                <span>Premium</span>
              </div>
            : null
            }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${(isFavorite) ? `property__bookmark-button--active` : null} button`} type="button">
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
                    <img className="property__avatar user__avatar" src={`/${host.avaPicUrl}`} width="74" height="74" alt="Host avatar"></img>
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
          {(placesNearby.length === 3 && activePlacePageId === id)
            ? <CityMap placesCoordinates={placesNearbyCoordinates} sectionLocationClass={`property__map`} placePageCoordinates={gps} activePlaceCoordinates={activeCardLatLon} cityLatLon={cityLatLon}/>
            : null
          }
        </section>
        <div className="container">
          {(placesNearby.length === 3 && activePlacePageId === id)
            ? <PlacesListNearbyWrapped places={placesNearby}/>
            : <section className="near-places places">
                <h2 className="near-places__title">Loading other places in the neighbourhood</h2>
              </section>
          }
        </div>
      </main>
    </div>;
  }
}


PlaceImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

Commodity.propTypes = {
  item: PropTypes.string.isRequired
};

PlacePage.propTypes = {
  activePlacePageId: PropTypes.number,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
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
  id: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        avaPicName: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  placesNearby: PropTypes.arrayOf(
      PropTypes.shape({
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
        }).isRequired
      }).isRequired
  ).isRequired,
  placesNearbyCoordinates: PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired
      }).isRequired
  ).isRequired,
  activeCardLatLon: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  cityLatLon: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  getOffersNearby: PropTypes.func.isRequired,
  setActivePlacePageId: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const {activePlacePageId, placesNearby} = state.offers;

  const routeId = Number(history.location.pathname.slice(7));

  const placesNearbyProps = [];

  const placesNearbyPropsCoordinates = [];

  const shouldUpdatePlacesNearby = () => {
    if (activePlacePageId === routeId && placesNearby.length === 3) {
      for (let i = 0; i < 3; i++) {
        placesNearbyProps.push(placesNearby[i]);
        placesNearbyPropsCoordinates.push({lat: placesNearbyProps[i].gps.lat, lon: placesNearbyProps[i].gps.lon});
      }
    }
  };

  shouldUpdatePlacesNearby();

  const placeObj = state.offers.allOffersWithCompleteData[routeId - 1];

  return {
    activePlacePageId,
    placesNearby: placesNearbyProps,
    placesNearbyCoordinates: placesNearbyPropsCoordinates,
    cityLatLon: placeObj.cityLatLon,
    activeCardLatLon: state.offers.activeCardLatLon,
    title: placeObj.title,
    price: placeObj.price,
    isPremium: placeObj.isPremium,
    isFavorite: placeObj.isFavorite,
    id: placeObj.id,
    type: placeObj.type,
    rating: placeObj.rating,
    gps: placeObj.gps,
    bedroomsQnt: placeObj.bedroomsQnt,
    guestsMaxQnt: placeObj.guestsMaxQnt,
    images: placeObj.images,
    commodities: placeObj.commodities,
    description: placeObj.description,
    host: placeObj.host,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getOffersNearby() {
    dispatch(OffersApiManager.getOffersNearby());
  },
  setActivePlacePageId(activePlacePageId) {
    dispatch(OffersActionCreator.setActivePlacePageId(activePlacePageId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacePage);
