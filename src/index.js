import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './components/app/app.jsx';
import placesListing from './mocks/places-listing-original.js';
import placesFullData from './mocks/places-full-data.js';
import {reducer, ApiManager, ActionCreator} from "./reducer.js";
import {createAPI} from "./api.js";

const api = createAPI(() => {});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

store.dispatch(ApiManager.getAllOffers());
  
ReactDOM.render(
  <Provider store={store}>
    <App placesListing={placesListing} placePageData={placesFullData[0]}/>
  </Provider>,
  document.getElementById(`root`)
);
