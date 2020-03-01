import React from 'react';
// import PropTypes from 'prop-types';

// const CityTab = ({city}) => {
//   return <li className="locations__item" onClick={onCityTabClick}>
//   <a className="locations__item-link tabs__item" href="#">
//     <span>{city}</span>
//   </a>
// </li>;
// };


class CitiesNavigation extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Paris</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Cologne</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Brussels</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item tabs__item--active">
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span className="tabs__item-hamburg">Hamburg</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Dusseldorf</span>
          </a>
        </li>
      </ul>
    </section>
  </div>;
  };
};

export default CitiesNavigation;
