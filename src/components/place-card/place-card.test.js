import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import placesListing from '../../mocs/places-listing-test.js';

it(`<PlaceCard/> should render "Tiny apartment"`, () => {
  const tree = renderer
    .create(<PlaceCard placeName={placesListing.places[0]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
