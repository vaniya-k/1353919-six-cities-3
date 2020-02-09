import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  static propTypes = {
    places: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    foundPlacesQnt: PropTypes.number.isRequired
  }

  render() {
    return <Main foundPlacesQnt={this.props.foundPlacesQnt} places={this.props.places}/>;
  }
}
