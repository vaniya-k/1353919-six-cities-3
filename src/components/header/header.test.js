import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';

const mockReducerNotLoggedIn = () => {
  const state = {
    offers: null,
    user: {
      authorizationStatus: `NO_AUTH`
    }
  };
  return state;
};

const mockStoreNotLoggedIn = createStore(mockReducerNotLoggedIn);

const mockReducerLoggedIn = () => {
  const state = {
    offers: null,
    user: {
      authorizationStatus: `AUTH`
    }
  };
  return state;
};

const mockStoreLoggedIn = createStore(mockReducerLoggedIn);


it(`<Header/> for a not authenticated user`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreNotLoggedIn}><Router history={history}><Header/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<Header/> for a authenticated user`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreLoggedIn}><Router history={history}><Header/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
