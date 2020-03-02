import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListMain from './places-list-main.jsx';
import placesListing from '../../mocks/places-listing-test.js';

it(`<PlacesFullList/>  with 54 matches and 3 places displayed`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<PlacesListMain places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt} onPlaceCardClick={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
