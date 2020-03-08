import React from 'react';
import renderer from 'react-test-renderer';
import PlacePage from './place-page.jsx';
import placesFullData from '../../mocks/places-full-data-test.js';
import placesListing from '../../mocks/places-listing-test.js';

it(`<PlaceCard/> should render "Sweet room"`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<PlacePage placePageData={placesFullData[0]} places={placesListing.places} placesCoordinates={placesListing.coordinates} onPlaceCardClick={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
