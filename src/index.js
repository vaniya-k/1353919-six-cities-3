import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from './components/app/app.jsx';
import placesListing from './mocks/places-listing-original.js';
import placesFullData from './mocks/places-full-data.js';
import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App placesListing={placesListing} placePageData={placesFullData[0]}/>
    </Provider>,
    document.getElementById(`root`)
);
