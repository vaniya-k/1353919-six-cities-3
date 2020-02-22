import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(cardId) {
    const value = (cardId === this.state.activeCardId) ? null : cardId;
    this.setState({activeCardId: value});
  }

  render() {
    const {places, foundPlacesQnt, onPlaceCardClick} = this.props;

    return <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{foundPlacesQnt} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use href="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {places.map((place, i) => <PlaceCard key={`key${i}`} cardId={`key${i}`} place={place} handleHover={this.handleHover} onPlaceCardClick={onPlaceCardClick} />)}
      </div>
    </section>;
  }
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
      })).
    isRequired,
  foundPlacesQnt: PropTypes.number.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired
};

export default PlacesList;
