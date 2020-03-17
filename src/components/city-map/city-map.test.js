import React from 'react';
import renderer from 'react-test-renderer';
import placesListing from '../../mocks/places-listing-test.js';
import CityMap from '../city-map/city-map.jsx';

it(`<CityMap/> should return the map of Amsterdam with 3 places`, () => {

  const tree = renderer
    .create(<CityMap placesCoordinates={placesListing.coordinates} sectionLocationClass={`cities__map`} activePlaceCoordinates={{lat: null, lon: null}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
