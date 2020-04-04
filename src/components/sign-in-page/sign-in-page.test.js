import React from 'react';
import renderer from 'react-test-renderer';
import SignInPage from './sign-in-page.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';


const mockReducer = () => {
  const state = {
    offers: null,
    user: {
      authorizationStatus: `NO_AUTH`
    }
  };

  return state;
};

const mockStore = createStore(mockReducer);

it(`<SignInPage/> with empty fields`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><Router history={history}><SignInPage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
