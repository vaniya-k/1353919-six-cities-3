import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import placesListing from '../../mocs/places-listing-test.js';

it(`<App/> should return the whole page with 54 matches and 3 places displayed`, () => {
  const tree = renderer
    .create(<App places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
