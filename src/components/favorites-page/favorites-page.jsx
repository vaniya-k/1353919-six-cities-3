import React from 'react';
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
}

const FavoritesListEmpty = () => {
  return <main class="page__main page__main--favorites page__main--favorites-empty">
    <div class="page__favorites-container container">
      <section class="favorites favorites--empty">
        <h1 class="visually-hidden">Favorites (empty)</h1>
        <div class="favorites__status-wrapper">
          <b class="favorites__status">Nothing yet saved.</b>
          <p class="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
        </div>
      </section>
    </div>
  </main>;
}

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
}

const FavoritesPage = ({favsList}) => {
  return <div className={`page ${(favsList.length === 0) ? `page--favorites-empty` : null}`}>
    <Header/>
    {(favsList.length === 0) ? <FavoritesListEmpty/> : <FavoritesListPopulated favsList={favsList}/>}
    <footer className="footer container">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
      </a>
    </footer>
  </div>;
};

const mapStateToProps = (state) => {

  const testData = [{city: state.offers.allOffers[0].city, places: [{...state.offers.allOffers[0].places[0]},{...state.offers.allOffers[0].places[1]}]},{city: state.offers.allOffers[1].city, places: [{...state.offers.allOffers[1].places[1]}]}]

  return {
    favsList: testData
  }
};

export default connect(mapStateToProps, null)(FavoritesPage);
