import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import placesListing from '../../mocks/places-listing-test.js';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "../../reducer/reducer.js";
import {createAPI} from "../../api.js";

it(`<Main/> should return the whole page with 54 matches and 3 places displayed`, () => {
  const mock = jest.fn();

  const api = createAPI(() => {});

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  const tree = renderer
    .create(<Provider store={store}><Main places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt} onPlaceCardClick={mock} placesCoordinates={placesListing.coordinates}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
