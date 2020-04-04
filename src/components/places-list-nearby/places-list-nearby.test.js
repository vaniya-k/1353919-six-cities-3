import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListNearby from './places-list-nearby.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';

const mockPlaces = [
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
  },
  {
    id: 5,
    title: `Circus`,
    price: 19,
    type: `room`,
    rating: 60,
    isPremium: false,
    isFavorite: false,
    previewUrl: `https://`,
    gps: {lat: 123, lon: 123}
  }
];

const mockReducer = () => {
  const state = {
    offers: {
      activeSortType: 0
    },
    user: {
      authorizationStatus: `AUTH`
    }
  };

  return state;
};

const mockStore = createStore(mockReducer);

const mockFunc = jest.fn();

it(`<PlacesListNearby/> shows three places in Gotham`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><Router history={history}><PlacesListNearby places={mockPlaces} handleHover={mockFunc}/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
