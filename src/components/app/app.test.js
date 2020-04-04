import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';

const mockReducerWithoutPlaces = () => {
  const state = {
    offers: {
      activeCityName: `Metropolis`,
      activeCityId: 0,
      activeCardLatLon: {lat: null, lon: null},
      activeSortType: 0,
      places: [],
      allOffers: [{
        city: `Metropolis`,
        cityLatLon: {lat: 123, lon: 123},
        places: []
      },
      {
        city: `Gotham`,
        cityLatLon: {lat: 123, lon: 123},
        places: []
      },
      {
        city: `Utopia`,
        cityLatLon: {lat: 123, lon: 123},
        places: []
      },
      {
        city: `Dystopia`,
        cityLatLon: {lat: 123, lon: 123},
        places: []
      },
      {
        city: `Inferno`,
        cityLatLon: {lat: 123, lon: 123},
        places: []
      },
      {
        city: `Limbo`,
        cityLatLon: {lat: 123, lon: 123},
        places: []
      }]
    },
    user: {
      authorizationStatus: `AUTH`
    }
  };
  return state;
};

const mockStoreWithoutPlaces = createStore(mockReducerWithoutPlaces);

it(`<App/> should render <MainPage> by default`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreWithoutPlaces}><Router history={history}><App/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

