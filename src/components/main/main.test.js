import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import placesListing from '../../mocks/places-listing-test.js';

it(`<Main/> should return the whole page with 54 matches and 3 places displayed`, () => {
  const tree = renderer
    .create(<Main places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
