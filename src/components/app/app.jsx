import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {places, foundPlacesQnt} = props;

  return <Main foundPlacesQnt={foundPlacesQnt} places={places}/>;
};

App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
      })).
  isRequired,
  foundPlacesQnt: PropTypes.number.isRequired
};

export default App;
