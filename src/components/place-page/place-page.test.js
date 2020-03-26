import React from 'react';
import renderer from 'react-test-renderer';
import PlacePage from './place-page.jsx';
import placesFullData from '../../mocks/places-full-data-test.js';
import placesListing from '../../mocks/places-listing-test.js';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "../../reducer/reducer.js";
import {createAPI} from "../../api.js";

it(`<PlaceCard/> should render "Sweet room"`, () => {
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
    .create(<Provider store={store}><PlacePage placePageData={placesFullData[0]} places={placesListing.places} placesCoordinates={placesListing.coordinates} onPlaceCardClick={mock}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
