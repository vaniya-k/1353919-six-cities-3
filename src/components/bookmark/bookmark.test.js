import React from 'react';
import renderer from 'react-test-renderer';
import Bookmark from './bookmark.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";

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

it(`A regular bookmark for a unsaved place`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><Bookmark isFavorite={false} id={1} isOnPlacePage={false}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`A regular bookmark for a saved place`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><Bookmark isFavorite={true} id={1} isOnPlacePage={false}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`A big bookmark for an unsaved place`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><Bookmark isFavorite={false} id={1} isOnPlacePage={true}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`A big bookmark for an saved place`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><Bookmark isFavorite={true} id={1} isOnPlacePage={true}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
