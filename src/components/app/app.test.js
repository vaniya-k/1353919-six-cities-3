import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import placesListing from '../../mocks/places-listing-test.js';
import placesFullData from '../../mocks/places-full-data-test.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "../../reducer.js";

it(`<App/> should return the whole page with 54 matches and 3 places displayed`, () => {
  const store = createStore(
      reducer
  );

  const tree = renderer
    .create(<Provider store={store}><App placesListing={placesListing} placePageData={placesFullData[0]}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
