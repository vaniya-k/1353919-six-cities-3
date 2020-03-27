import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './components/app/app.jsx';
import placesListing from './mocks/places-listing-original.js';
import placesFullData from './mocks/places-full-data.js';
import reducer from './reducer/reducer.js';
import {ApiManager as OffersApiManager} from "./reducer/offers/offers.js";
import {ApiManager as UserApiManager} from './reducer/user/user.js';
import {createAPI} from "./api.js";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(OffersApiManager.getAllOffers());
store.dispatch(OffersApiManager.getAllOffersWithCompleteData());
store.dispatch(UserApiManager.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App placesListing={placesListing} placePageData={placesFullData[0]}/>
    </Provider>,
    document.getElementById(`root`)
);
