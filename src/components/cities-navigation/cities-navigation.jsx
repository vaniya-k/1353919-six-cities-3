import React from 'react';
import PropTypes from 'prop-types';

const CityTab = ({city, onCityTabClick, cityId}) => {

  return <li className="locations__item">
  <a className="locations__item-link tabs__item" href="#" onClick={() => onCityTabClick(cityId)}>
    <span>{city}</span>
  </a>
</li>;
};

class CitiesNavigation extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {cities, onCityTabClick} = this.props;

    return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => <CityTab city={city} key={`key${i}`} cityId={i} onCityTabClick={onCityTabClick}/>)}
      </ul>
    </section>
  </div>;
  };
};

CitiesNavigation.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCityTabClick: PropTypes.func
};

export default CitiesNavigation;
