import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import placesListing from '../../mocks/places-listing-test.js';

it(`<PlaceCard/> should render "Tiny apartment"`, () => {
  const tree = renderer
    .create(<PlaceCard place={placesListing.places[0]} cardId={`keyXXX`} handleHover={placesListing.handleHover}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
