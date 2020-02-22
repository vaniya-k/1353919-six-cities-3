import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';
import placesListing from '../../mocks/places-listing-test.js';

it(`<PlaceList/>  with 54 matches and 3 places displayed`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<PlacesList places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt} onPlaceCardClick={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
