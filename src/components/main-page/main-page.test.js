import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';

const mockReducerWithPlaces = () => {
  const state = {
    offers: {
      activeCityName: `Metropolis`,
      activeCityId: 0,
      activeCardLatLon: {lat: 123, lon: 123},
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
        ]
      },
      {
        city: `Gotham`,
        cityLatLon: {lat: 123, lon: 123},
        places: [
          {
            id: 3,
            title: `Batman's Den`,
            price: 456,
            type: `house`,
            rating: 60,
            isPremium: false,
            isFavorite: true,
            previewUrl: `https://`,
            gps: {lat: 123, lon: 123}
          },
          {
            id: 4,
            title: `Wayne Estate`,
            price: 789,
            type: `apartment`,
            rating: 100,
            isPremium: true,
            isFavorite: true,
            previewUrl: `https://`,
            gps: {lat: 123, lon: 123}
          }
        ]
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

const mockStoreWithPlaces = createStore(mockReducerWithPlaces);

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

it(`<MainPage/> with Metropolis as the selected city and a couple of places there`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreWithPlaces}><Router history={history}><MainPage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<MainPage/> with Metropolis as the selected city and no places there`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreWithoutPlaces}><Router history={history}><MainPage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
