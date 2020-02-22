import React from 'react';
import renderer from 'react-test-renderer';
import PlacePage from './place-page.jsx';
import placesFullData from '../../mocks/places-full-data-test.js';

it(`<PlaceCard/> should render "Sweet room"`, () => {
  const tree = renderer
    .create(<PlacePage placePageData={placesFullData[0]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
