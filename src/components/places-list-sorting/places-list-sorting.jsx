import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/offers/offers.js";

const SORT_TYPES = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

class PlacesListSorting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  generateStyleClasses = (activeSortType, itemSortType) => {
    if (activeSortType === itemSortType) {
      return `places__option places__option--active`;
    } else {
      return `places__option`;
    }
  }

  toggleDropDown = () => {
    this.setState((prevState) => ({
      isOpened: !prevState.isOpened
    }));
  }

  generateLiItems = () => {
    const liItems = [];

    for (let i = 0; i < SORT_TYPES.length; i++) {
      liItems.push(<li className={this.generateStyleClasses(this.props.activeSortType, i)} key={`key${i}`} onClick={() => {
        this.props.handleTypeItemClick(i); this.toggleDropDown();
      }} tabIndex="0">{SORT_TYPES[i]}</li>);
    }

    return liItems;
  }

  render() {
    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex="0" onClick={this.toggleDropDown}>
        {SORT_TYPES[this.props.activeSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${(this.state.isOpened) ? `places__options--opened` : null}`}>
        {this.generateLiItems()}
      </ul>
    </form>;
  }
}

PlacesListSorting.propTypes = {
  activeSortType: PropTypes.number.isRequired,
  handleTypeItemClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeSortType: state.offers.activeSortType,
});

const mapDispatchToProps = (dispatch) => ({
  handleTypeItemClick(selectedSortType) {
    dispatch(ActionCreator.changeSorting(selectedSortType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesListSorting);
