import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import placesListing from '../../mocks/places-listing-test.js';

it(`<PlaceCardMain/> should render "Tiny apartment"`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<PlaceCard place={placesListing.places[0]} cardId={`keyXXX`} handleHover={placesListing.handleHover} onPlaceCardClick={mock} articleLocationClass={`cities`}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
