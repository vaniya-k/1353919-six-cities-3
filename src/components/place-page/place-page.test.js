import React from 'react';
import renderer from 'react-test-renderer';
import PlacePage from './place-page.jsx';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "../../reducer/reducer.js";
import {createAPI} from "../../api.js";
import {ApiManager as OffersApiManager} from '../../reducer/offers/offers.js';
import reviews from '../../mocks/places-listing-original.js';

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

  store.dispatch(OffersApiManager.getAllOffersWithCompleteData())
    .then(() => {
      const tree = renderer
      .create(<Provider store={store}><PlacePage reviews={reviews} onPlaceCardClick={mock}/></Provider>)
      .toJSON();

      expect(tree).toMatchSnapshot();
    });
});
