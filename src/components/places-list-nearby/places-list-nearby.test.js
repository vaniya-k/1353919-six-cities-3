import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListNearby from './places-list-nearby.jsx';
import placesListing from '../../mocks/places-listing-test.js';

it(`<PlacesListNearby/> should return 3 places displayed`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<PlacesListNearby places={placesListing.places.splice(0, 3)} onPlaceCardClick={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
