import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import placesListing from '../../mocks/places-listing-test.js';
import placesFullData from '../../mocks/places-full-data-test.js';

it(`<App/> should return the whole page with 54 matches and 3 places displayed`, () => {
  const tree = renderer
    .create(<App placesListing={placesListing} placePageData={placesFullData[0]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
