import React from 'react';
import renderer from 'react-test-renderer';
import CityMap from '../city-map/city-map.jsx';

it(`<CityMap/> should return a Leaflet container`, () => {

  const tree = renderer
    .create(<CityMap placesCoordinates={[{lat: 48.877610000000004, lon: 2.3349911}, {lat: 48.846610000000005, lon: 2.3744911}, {lat: 48.862610000000004, lon: 2.36949911}]} sectionLocationClass={`cities__map`} cityLatLon={{lat: 48.85661, lon: 2.351499}} activePlaceCoordinates={{lat: null, lon: null}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
