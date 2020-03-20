import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListMain from './places-list-main.jsx';
import placesListing from '../../mocks/places-listing-test.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "../../reducer.js";

it(`<PlacesFullList/>  with 54 matches and 3 places displayed`, () => {
  const mock = jest.fn();

  const store = createStore(
      reducer
  );

  const tree = renderer
    .create(<Provider store={store}><PlacesListMain activeCityName={placesListing.activeCityName} places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt} onPlaceCardClick={mock}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
