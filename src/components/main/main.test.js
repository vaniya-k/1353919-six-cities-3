import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import placesListing from '../../mocks/places-listing-test.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "../../reducer.js";

it(`<Main/> should return the whole page with 54 matches and 3 places displayed`, () => {
  const mock = jest.fn();

  const store = createStore(
      reducer
  );

  const tree = renderer
    .create(<Provider store={store}><Main places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt} onPlaceCardClick={mock} placesCoordinates={placesListing.coordinates}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
