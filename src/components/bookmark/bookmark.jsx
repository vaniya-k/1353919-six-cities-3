import React from 'react';
import PropTypes from 'prop-types';
import {createAPI} from "../../api.js";
import {connect} from "react-redux";
import {ApiManager as OffersApiManager} from "../../reducer/offers/offers.js";
import history from '../../history.js';

const api = createAPI(() => {});

const handleFavToggle = (authorizationStatus, placeId, getAllOffers, getAllOffersWithCompleteData, getOffersNearby, shouldBeAdded) => {
  if (authorizationStatus !== `AUTH`) {
    history.push(`/login`);
  } else {
    api.post(`/favorite/${placeId}/${shouldBeAdded}`)
      .then(() => {
        if (history.location.pathname.includes(`place`)) {
          getOffersNearby();
        }
        getAllOffers();
        getAllOffersWithCompleteData();
      });
  }
};

const generateButtonStyleClass = (authorizationStatus, isFavorite, isOnPlacePage) => {
  if (isFavorite && isOnPlacePage && authorizationStatus === `AUTH`) {
    return `property__bookmark-button property__bookmark-button--active button`;
  } else if (isFavorite && isOnPlacePage === false && authorizationStatus === `AUTH`) {
    return `place-card__bookmark-button place-card__bookmark-button--active button`;
  } else if (isFavorite === false && isOnPlacePage) {
    return `property__bookmark-button button`;
  } else {
    return `place-card__bookmark-button button`;
  }
};

const Bookmark = ({authorizationStatus, isFavorite, id, getAllOffers, getAllOffersWithCompleteData, getOffersNearby, isOnPlacePage = false}) => {
  return <button className={generateButtonStyleClass(authorizationStatus, isFavorite, isOnPlacePage)} type="button" onClick={(isFavorite) ? () => handleFavToggle(authorizationStatus, id, getAllOffers, getAllOffersWithCompleteData, getOffersNearby, 0) : () => handleFavToggle(authorizationStatus, id, getAllOffers, getAllOffersWithCompleteData, getOffersNearby, 1)}>
    <svg className={(isOnPlacePage) ? `property__bookmark-icon` : `place-card__bookmark-icon`} width={(isOnPlacePage) ? `31` : `18`} height={(isOnPlacePage) ? `33` : `19`}>
      <use href="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">In bookmarks</span>
  </button>;
};

Bookmark.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  getAllOffers: PropTypes.func.isRequired,
  getAllOffersWithCompleteData: PropTypes.func.isRequired,
  getOffersNearby: PropTypes.func.isRequired,
  isOnPlacePage: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  getAllOffers() {
    dispatch(OffersApiManager.getAllOffers());
  },
  getOffersNearby() {
    dispatch(OffersApiManager.getOffersNearby());
  },
  getAllOffersWithCompleteData() {
    dispatch(OffersApiManager.getAllOffersWithCompleteData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
