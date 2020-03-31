import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './components/app/app.jsx';
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

store.dispatch(UserApiManager.checkAuth());
store.dispatch(OffersApiManager.getAllOffers());
store.dispatch(OffersApiManager.getAllOffersWithCompleteData()).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById(`root`)
  );
});
