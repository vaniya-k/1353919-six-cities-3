import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';

const mockReducer = () => {
  const state = {
    offers: null,
    user: {
      authorizationStatus: `AUTH`
    }
  };
  return state;
};

const mockStore = createStore(mockReducer);

const place = {
  id: 4,
  title: `Wayne Estate`,
  price: 789,
  type: `apartment`,
  rating: 100,
  isPremium: true,
  isFavorite: true,
  previewUrl: `https://`,
  gps: {lat: 123, lon: 123}
};

it(`<PlaceCard/> should show Wayne Estate rendered for <FavoritesPage/>`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<Provider store={mockStore}><Router history={history}><PlaceCard placeLatLon={{lat: 123, lon: 123}} place={place} handleHover={mock} page={`favorites`}/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<PlaceCard/> should show Wayne Estate rendered for <MainPage/>`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<Provider store={mockStore}><Router history={history}><PlaceCard placeLatLon={{lat: 123, lon: 123}} place={place} handleHover={mock}/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<PlaceCard/> should show Wayne Estate rendered for <PlacesListNearby/> on <PlacePage>`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<Provider store={mockStore}><Router history={history}><PlaceCard placeLatLon={{lat: 123, lon: 123}} place={place} handleHover={mock} page={`place`}/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
