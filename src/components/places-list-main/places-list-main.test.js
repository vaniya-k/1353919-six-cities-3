import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListMain from './places-list-main.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';

const mockReducer = () => {
  const state = {
    offers: {
      activeCityName: `Metropolis`,
      activeCityId: 0,
      activeCardLatLon: {lat: null, lon: null},
      activeSortType: 0,
      places: [
        {
          id: 1,
          title: `Solitude Fortress`,
          price: 123,
          type: `house`,
          rating: 100,
          isPremium: true,
          isFavorite: true,
          previewUrl: `https://`,
          gps: {lat: 123, lon: 123}
        },
        {
          id: 2,
          title: `Daily Planet Office`,
          price: 321,
          type: `apartment`,
          rating: 20,
          isPremium: false,
          isFavorite: true,
          previewUrl: `https://`,
          gps: {lat: 123, lon: 123}
        }
      ],
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

const mockStore = createStore(mockReducer);

it(`<PlacesListMain/> shows a couple of places in Metropolis`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><Router history={history}><PlacesListMain/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
