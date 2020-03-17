import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PlacesListNearby from '../../components/places-list-nearby/places-list-nearby.jsx';
import PlacesListMain from '../../components/places-list-main/places-list-main.jsx';

const withActiveCardSwitcher = (Component) => {
  return class ActiveCardSwitcher extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleHover = this.handleHover.bind(this);
    }

    handleHover(placeLatLon) {
      const value = (placeLatLon === this.props.activeCardLatLon) ? {lat: null, lon: null} : placeLatLon;
      this.props.setActiveCardLatLon(value);
    }

    render() {
      return <Component {...this.props} handleHover={this.handleHover}/>;
    }
  };
};

withActiveCardSwitcher.propTypes = {
  setActiveCardLatLon: PropTypes.shape({
    type: PropTypes.oneOf([`SET_ACTIVE_CARD_LAT_LON`]),
    payload: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  activeCardLatLon: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  })
};

const mapStateToProps = (state) => ({
  activeCardLatLon: state.activeCardLatLon
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCardLatLon(activeCardLatLon) {
    dispatch(ActionCreator.setActiveCardLatLon(activeCardLatLon));
  },
});

export const PlacesListNearbyWrapped = connect(mapStateToProps, mapDispatchToProps)(withActiveCardSwitcher(PlacesListNearby));

export const PlacesListMainWrapped = connect(mapStateToProps, mapDispatchToProps)(withActiveCardSwitcher(PlacesListMain));
