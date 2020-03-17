import React from 'react';
import renderer from 'react-test-renderer';
import PlacePage from './place-page.jsx';
import placesFullData from '../../mocks/places-full-data-test.js';
import placesListing from '../../mocks/places-listing-test.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "../../reducer.js";


it(`<PlaceCard/> should render "Sweet room"`, () => {
  const mock = jest.fn();

  const store = createStore(
      reducer
  );

  const tree = renderer
    .create(<Provider store={store}><PlacePage placePageData={placesFullData[0]} places={placesListing.places} placesCoordinates={placesListing.coordinates} onPlaceCardClick={mock}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
