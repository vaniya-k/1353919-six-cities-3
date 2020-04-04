import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesPage from './favorites-page.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';

const mockReducerWithoutFavs = () => {
  const state = {
    offers: {
      allOffers: []
    },
    user: {
      authorizationStatus: `AUTH`
    }
  };
  return state;
};

const mockStoreWithoutFavs = createStore(mockReducerWithoutFavs);

const mockReducerWithFavs = () => {
  const state = {
    offers: {
      allOffers: [{
        city: `Metropolis`,
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
      }]
    },
    user: {
      authorizationStatus: `AUTH`
    }
  };
  return state;
};

const mockStoreWithFavs = createStore(mockReducerWithFavs);

it(`<FavoritesPage/> shows no favs`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreWithoutFavs}><Router history={history}><FavoritesPage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<FavoritesPage/> shows two favs -- of Kent Clark by day and Superman by night`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreWithFavs}><Router history={history}><FavoritesPage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
