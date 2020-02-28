import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardInfo from './place-card-info.jsx';
import placesListing from '../../mocks/places-listing-test.js';

it(`<PlaceCardInfo/> should render "Spacious loft"`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<PlaceCardInfo place={placesListing.places[1]} onPlaceCardClick={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
