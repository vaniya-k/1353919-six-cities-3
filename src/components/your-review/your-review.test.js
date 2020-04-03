import React from 'react';
import renderer from 'react-test-renderer';
import YourReview from './your-review.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";

const mockReducer = () => {
  const state = {
    offers: null,
    user: null
  };

  return state;
};

const mockStore = createStore(mockReducer);

it(`<YourReview/> with empty fields`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><YourReview/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
