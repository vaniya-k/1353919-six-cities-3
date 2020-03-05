import React from 'react';
import PropTypes from 'prop-types';

const CityTab = ({city, onCityTabClick, cityId, activeCityId}) => {
  return <li className="locations__item">
  <a className={`locations__item-link tabs__item ${(cityId === activeCityId) ? `tabs__item--active`: null}`} href="#" onClick={() => onCityTabClick(cityId)}>
    <span>{city}</span>
  </a>
</li>;
};

const CitiesNavigation = ({cities, onCityTabClick, activeCityId}) => {
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => <CityTab city={city} key={`key${i}`} cityId={i} onCityTabClick={onCityTabClick} activeCityId={activeCityId}/>)}
      </ul>
    </section>
  </div>;
};

CitiesNavigation.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeCityId: PropTypes.number.isRequired,
  onCityTabClick: PropTypes.func.isRequired
};

export default CitiesNavigation;
