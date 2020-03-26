//фейковый пулреквест -- хочу прочитать задание к module8-task2

import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import placesListing from '../../mocks/places-listing-test.js';
import placesFullData from '../../mocks/places-full-data-test.js';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "../../reducer/reducer.js";
import {createAPI} from "../../api.js";

it(`<App/> should return the whole page with 54 matches and 3 places displayed`, () => {
  const api = createAPI(() => {});

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  const tree = renderer
    .create(<Provider store={store}><App placesListing={placesListing} placePageData={placesFullData[0]}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
