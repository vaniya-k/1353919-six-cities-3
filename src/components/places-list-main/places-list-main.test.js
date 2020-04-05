import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListMain from './places-list-main.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';

const mockPlaces = [
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

it(`<PlacesListMain/> shows a couple of places in Metropolis`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><Router history={history}><PlacesListMain places={mockPlaces} activeCityName={`Metropolis`} foundPlacesQuantity={mockPlaces.length} onHover={mockFunc}/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
