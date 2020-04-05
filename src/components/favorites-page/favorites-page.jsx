import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import Header from '../header/header.jsx';
import PlaceCard from '../place-card/place-card.jsx';

const CityLiItemWithFavs = ({cityObj}) => {
  const {city, places} = cityObj;

  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to="/">
          <span>{city}</span>
        </Link>
      </div>
    </div>
    <div className="favorites__places">
      {places.map((place, i) => <PlaceCard key={`key${i}`} place={place} page={`favorites`}/>)}
    </div>
  </li>;
};

const FavoritesListEmpty = () => {
  return <main className="page__main page__main--favorites page__main--favorites-empty">
    <div className="page__favorites-container container">
      <section className="favorites favorites--empty">
        <h1 className="visually-hidden">Favorites (empty)</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Nothing yet saved.</b>
          <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
        </div>
      </section>
    </div>
  </main>;
};

const FavoritesListPopulated = ({favsList}) => {
  return <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favsList.map((cityObj, i) => <CityLiItemWithFavs cityObj={cityObj} key={`key${i}`}/>)}
        </ul>
      </section>
    </div>
  </main>;
};

const FavoritesPage = ({favsList}) => {
  return <div className={`page ${(favsList.length === 0) ? `page--favorites-empty` : null}`}>
    <Header/>
    {(favsList.length === 0) ? <FavoritesListEmpty/> : <FavoritesListPopulated favsList={favsList}/>}
    <footer className="footer container">
      <Link className="footer__logo-link" to="/">
        <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
      </Link>
    </footer>
  </div>;
};


CityLiItemWithFavs.propTypes = {
  cityObj: PropTypes.shape({
    city: PropTypes.string.isRequired,
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
  }).isRequired,
};

FavoritesListPopulated.propTypes = {
  favsList: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
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
      }).isRequired,
  ).isRequired,
};

FavoritesPage.propTypes = {
  favsList: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
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
      }),
  ).isRequired,
};

const mapStateToProps = (state) => {
  const allOffers = state.offers.allOffers;

  const allOffersFilteredWithFavs = [];

  allOffers.map((cityObj) => {
    const filteredPlaces = cityObj.places.filter((place) => place.isFavorite === true);

    const filteredCityObj = Object.assign({}, {city: cityObj.city}, {
      places: [...filteredPlaces]
    });

    if (filteredCityObj.places.length !== 0) {
      allOffersFilteredWithFavs.push(filteredCityObj);
    }
  });

  return {
    favsList: allOffersFilteredWithFavs
  };
};

export default connect(mapStateToProps, null)(FavoritesPage);
